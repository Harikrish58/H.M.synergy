import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Locale = "en" | "pl" | "ua";

type RequestBody = {
  sourceLanguage: Locale;
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  targetLanguages: Locale[];
};

type OpenAIContentItem = {
  type?: string;
  text?: string;
};

type OpenAIOutputItem = {
  type?: string;
  content?: OpenAIContentItem[];
};

type OpenAIError = {
  message?: string;
};

type OpenAIResponseData = {
  output_text?: string;
  output?: OpenAIOutputItem[];
  error?: OpenAIError;
};

type Translation = {
  title: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

const allowedLanguages: Locale[] = ["en", "pl", "ua"];

const languageNames: Record<Locale, string> = {
  en: "English",
  pl: "Polish",
  ua: "Ukrainian",
};

export async function POST(request: Request) {
  try {
    // ---------------------------------------------------------
    // Verify admin
    // ---------------------------------------------------------
    const supabase = await createSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 },
      );
    }

    const { data: adminUser, error: adminError } =
      await supabase
        .from("admin_users")
        .select("user_id, role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

    if (adminError) {
      console.error("Admin verification error:", adminError);

      return NextResponse.json(
        {
          error: "Unable to verify administrator access.",
        },
        { status: 500 },
      );
    }

    if (!adminUser) {
      return NextResponse.json(
        { error: "Forbidden." },
        { status: 403 },
      );
    }

    // ---------------------------------------------------------
    // OpenAI API key
    // ---------------------------------------------------------
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "OPENAI_API_KEY is not configured on the server.",
        },
        { status: 500 },
      );
    }

    // ---------------------------------------------------------
    // Read request
    // ---------------------------------------------------------
    const body = (await request.json()) as Partial<RequestBody>;

    const {
      sourceLanguage,
      title,
      location,
      description,
      responsibilities,
      requirements,
      benefits,
      targetLanguages,
    } = body;

    // ---------------------------------------------------------
    // Validate
    // ---------------------------------------------------------
    if (
      !sourceLanguage ||
      !allowedLanguages.includes(sourceLanguage)
    ) {
      return NextResponse.json(
        { error: "Invalid source language." },
        { status: 400 },
      );
    }

    if (
      !title?.trim() ||
      !location?.trim() ||
      !description?.trim()
    ) {
      return NextResponse.json(
        {
          error:
            "Title, location, and description are required.",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(responsibilities)) {
      return NextResponse.json(
        {
          error: "Responsibilities must be an array.",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(requirements)) {
      return NextResponse.json(
        {
          error: "Requirements must be an array.",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(benefits)) {
      return NextResponse.json(
        {
          error: "Benefits must be an array.",
        },
        { status: 400 },
      );
    }

    if (!Array.isArray(targetLanguages)) {
      return NextResponse.json(
        {
          error: "Target languages must be an array.",
        },
        { status: 400 },
      );
    }

    const languagesToTranslate =
      targetLanguages.filter(
        (language): language is Locale =>
          allowedLanguages.includes(language) &&
          language !== sourceLanguage,
      );

    if (languagesToTranslate.length === 0) {
      return NextResponse.json(
        {
          error: "No target languages were provided.",
        },
        { status: 400 },
      );
    }

    // ---------------------------------------------------------
    // Prompt
    // ---------------------------------------------------------
    const systemPrompt = `
You are a professional translator for H&M Synergy,
a staffing and employment agency operating in Poland.

Translate employment vacancy content professionally.

Rules:

1. Preserve the exact meaning.
2. Do not invent information.
3. Do not add requirements or benefits.
4. Do not remove information.
5. Keep company names unchanged.
6. Translate every array item individually.
7. Keep the same number and order of array items.
8. Use natural professional language for employment advertisements.
9. Return ONLY valid JSON.
`;

    const userPrompt = `
Translate this job vacancy from ${languageNames[sourceLanguage]}
into the following languages:

${languagesToTranslate
  .map((language) => `- ${languageNames[language]}`)
  .join("\n")}

JOB TITLE:
${title}

LOCATION:
${location}

DESCRIPTION:
${description}

RESPONSIBILITIES:
${JSON.stringify(responsibilities)}

REQUIREMENTS:
${JSON.stringify(requirements)}

BENEFITS:
${JSON.stringify(benefits)}

Return exactly this JSON structure:

{
  "en": {
    "title": "translated title",
    "location": "translated location",
    "description": "translated description",
    "responsibilities": [],
    "requirements": [],
    "benefits": []
  },
  "pl": {
    "title": "translated title",
    "location": "translated location",
    "description": "translated description",
    "responsibilities": [],
    "requirements": [],
    "benefits": []
  },
  "ua": {
    "title": "translated title",
    "location": "translated location",
    "description": "translated description",
    "responsibilities": [],
    "requirements": [],
    "benefits": []
  }
}

Only return the requested target languages.
`;

    // ---------------------------------------------------------
    // Call OpenAI
    // ---------------------------------------------------------
    console.log("Starting OpenAI translation:", {
      sourceLanguage,
      targetLanguages: languagesToTranslate,
      model: "gpt-5.6-luna",
    });

    const openAIResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },

        body: JSON.stringify({
          model: "gpt-5.6-luna",

          input: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: userPrompt,
            },
          ],

          text: {
            format: {
              type: "json_object",
            },
          },
        }),
      },
    );

    // ---------------------------------------------------------
    // Read OpenAI response
    // ---------------------------------------------------------
    const rawOpenAIResponse =
      await openAIResponse.text();

    console.log(
      "OpenAI HTTP status:",
      openAIResponse.status,
    );

    console.log(
      "OpenAI raw response:",
      rawOpenAIResponse,
    );

    if (!openAIResponse.ok) {
      let errorMessage =
        "OpenAI translation request failed.";

      try {
        const errorData =
          JSON.parse(
            rawOpenAIResponse,
          ) as OpenAIResponseData;

        if (
          typeof errorData.error?.message ===
          "string"
        ) {
          errorMessage =
            errorData.error.message;
        }
      } catch {
        // Keep fallback message
      }

      return NextResponse.json(
        {
          error: errorMessage,
        },
        {
          status: 502,
        },
      );
    }

    // ---------------------------------------------------------
    // Parse OpenAI JSON
    // ---------------------------------------------------------
    let openAIData: OpenAIResponseData;

    try {
      openAIData =
        JSON.parse(
          rawOpenAIResponse,
        ) as OpenAIResponseData;
    } catch {
      console.error(
        "OpenAI returned non-JSON response.",
      );

      return NextResponse.json(
        {
          error:
            "OpenAI returned an invalid response.",
        },
        {
          status: 502,
        },
      );
    }

    // ---------------------------------------------------------
    // Get output text
    // ---------------------------------------------------------
    let outputText =
      typeof openAIData.output_text === "string"
        ? openAIData.output_text
        : "";

    /*
     * Fallback parser.
     *
     * This handles Responses API responses where
     * output_text is not exposed directly.
     */
    if (
      !outputText &&
      Array.isArray(openAIData.output)
    ) {
      for (const outputItem of openAIData.output) {
        if (
          outputItem.type === "message" &&
          Array.isArray(outputItem.content)
        ) {
          for (const contentItem of outputItem.content) {
            if (
              contentItem.type ===
                "output_text" &&
              typeof contentItem.text === "string"
            ) {
              outputText += contentItem.text;
            }
          }
        }
      }
    }

    if (!outputText.trim()) {
      console.error(
        "No text found in OpenAI response.",
        openAIData,
      );

      return NextResponse.json(
        {
          error:
            "OpenAI returned no translation text. Check the server terminal for the full OpenAI response.",
        },
        {
          status: 502,
        },
      );
    }

    // ---------------------------------------------------------
    // Parse generated translation JSON
    // ---------------------------------------------------------
    let translations: Partial<
      Record<Locale, Translation>
    >;

    try {
      translations = JSON.parse(
        outputText.trim(),
      ) as Partial<Record<Locale, Translation>>;
    } catch (error) {
      console.error(
        "Failed to parse translation JSON:",
        error,
      );

      console.error(
        "Translation output:",
        outputText,
      );

      return NextResponse.json(
        {
          error:
            "OpenAI returned translation data in an invalid JSON format.",
        },
        {
          status: 502,
        },
      );
    }

    // ---------------------------------------------------------
    // Validate translations
    // ---------------------------------------------------------
    for (const language of languagesToTranslate) {
      const translation =
        translations[language];

      if (!translation) {
        return NextResponse.json(
          {
            error: `Missing ${languageNames[language]} translation.`,
          },
          {
            status: 502,
          },
        );
      }

      if (
        typeof translation.title !== "string" ||
        typeof translation.location !== "string" ||
        typeof translation.description !==
          "string" ||
        !Array.isArray(
          translation.responsibilities,
        ) ||
        !Array.isArray(
          translation.requirements,
        ) ||
        !Array.isArray(translation.benefits)
      ) {
        return NextResponse.json(
          {
            error: `Invalid ${languageNames[language]} translation format.`,
          },
          {
            status: 502,
          },
        );
      }

      const arrays = [
        translation.responsibilities,
        translation.requirements,
        translation.benefits,
      ];

      const allArraysContainStrings =
        arrays.every((items) =>
          items.every(
            (item) => typeof item === "string",
          ),
        );

      if (!allArraysContainStrings) {
        return NextResponse.json(
          {
            error: `Invalid ${languageNames[language]} translation array contents.`,
          },
          {
            status: 502,
          },
        );
      }
    }

    // ---------------------------------------------------------
    // Success
    // ---------------------------------------------------------
    return NextResponse.json({
      success: true,
      sourceLanguage,
      translations,
    });
  } catch (error) {
    console.error(
      "Translation route error:",
      error,
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected translation error.",
      },
      {
        status: 500,
      },
    );
  }
}