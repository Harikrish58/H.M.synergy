import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseServiceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
}

/*
 * IMPORTANT:
 * This client uses the Supabase service-role key.
 *
 * It is SERVER ONLY.
 * Never expose this key with NEXT_PUBLIC_.
 */
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      locale,
      vacancy,
      workingConditions,
      candidateRequirements,
      employer,
      additionalNotes,
      consent,
    } = body;

    /*
     * Basic server-side validation.
     * Never rely only on frontend validation.
     */
    if (!vacancy?.title?.trim()) {
      return NextResponse.json(
        { error: "Job title is required." },
        { status: 400 },
      );
    }

    if (!vacancy?.category) {
      return NextResponse.json(
        { error: "Job category is required." },
        { status: 400 },
      );
    }

    if (!vacancy?.location?.trim()) {
      return NextResponse.json(
        { error: "Job location is required." },
        { status: 400 },
      );
    }

    if (!vacancy?.workersNeeded || Number(vacancy.workersNeeded) < 1) {
      return NextResponse.json(
        { error: "A valid number of workers is required." },
        { status: 400 },
      );
    }

    if (!vacancy?.employmentType) {
      return NextResponse.json(
        { error: "Employment type is required." },
        { status: 400 },
      );
    }

    if (!vacancy?.description?.trim()) {
      return NextResponse.json(
        { error: "Job description is required." },
        { status: 400 },
      );
    }

    if (!employer?.companyName?.trim()) {
      return NextResponse.json(
        { error: "Company name is required." },
        { status: 400 },
      );
    }

    if (!employer?.contactPerson?.trim()) {
      return NextResponse.json(
        { error: "Contact person is required." },
        { status: 400 },
      );
    }

    if (!employer?.email?.trim()) {
      return NextResponse.json(
        { error: "Business email is required." },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(employer.email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    if (!employer?.phone?.trim()) {
      return NextResponse.json(
        { error: "Phone number is required." },
        { status: 400 },
      );
    }

    if (consent?.privacy !== true) {
      return NextResponse.json(
        { error: "Privacy consent is required." },
        { status: 400 },
      );
    }

    if (consent?.contact !== true) {
      return NextResponse.json(
        { error: "Contact consent is required." },
        { status: 400 },
      );
    }

    /*
     * Insert the complete vacancy submission.
     */
    const { data, error } = await supabase
      .from("employer_job_submissions")
      .insert({
        locale: locale ?? "en",

        /*
         * VACANCY
         */
        job_title: vacancy.title,
        category: vacancy.category,
        location: vacancy.location,
        workers_needed: Number(vacancy.workersNeeded),
        employment_type: vacancy.employmentType,
        salary: vacancy.salary || null,
        start_date: vacancy.startDate || null,

        /*
         * JOB DESCRIPTION
         */
        description: vacancy.description,

        responsibilities: vacancy.responsibilities ?? [],
        requirements: vacancy.requirements ?? [],
        benefits: vacancy.benefits ?? [],

        /*
         * WORKING CONDITIONS
         */
        working_hours: workingConditions?.workingHours || null,

        shifts: workingConditions?.shifts || null,

        overtime: workingConditions?.overtime || null,

        weekend_work: workingConditions?.weekendWork || null,

        accommodation: workingConditions?.accommodation || null,

        transportation: workingConditions?.transportation || null,

        /*
         * CANDIDATE REQUIREMENTS
         */
        experience: candidateRequirements?.experience || null,

        education: candidateRequirements?.education || null,

        language_requirements: candidateRequirements?.language || null,

        other_requirements: candidateRequirements?.otherRequirements || null,

        /*
         * COMPANY
         */
        company_name: employer.companyName,
        contact_person: employer.contactPerson,
        email: employer.email,
        phone: employer.phone,
        website: employer.website || null,
        nip_krs: employer.nipKrs || null,

        /*
         * ADDITIONAL
         */
        additional_notes: additionalNotes || null,

        /*
         * CONSENTS
         */
        privacy_consent: consent.privacy,
        contact_consent: consent.contact,

        /*
         * ADMIN
         */
        status: "pending",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase employer vacancy error:", error);

      return NextResponse.json(
        {
          error: "Unable to save the vacancy submission.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data.id,
        message: "Vacancy submitted successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Employer vacancy API error:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred while submitting the vacancy.",
      },
      { status: 500 },
    );
  }
}
