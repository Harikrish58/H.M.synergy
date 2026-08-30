export type HomeContent = {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };

  hero: {
    eyebrow: string;
    title: string;
    description: string;
    employerCta: string;
    employeeCta: string;
    areas: string[];
    imageLabel: string;
    imageDescription: string;
  };

  company: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };

  services: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  manufacturing: {
    eyebrow: string;
    title: string;
    description: string;
    positions: string[];
    cta: string;
  };

  employers: {
    eyebrow: string;
    title: string;
    description: string;
    steps: string[];
    cta: string;
  };

  employees: {
    eyebrow: string;
    title: string;
    description: string;
    audience: string[];
    jobsCta: string;
    contactCta: string;
  };

  jobs: {
    eyebrow: string;
    title: string;
    description: string;
    listings: {
      title: string;
      meta: string;
      details: string;
    }[];
    cta: string;
  };

  why: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };

  finalCta: {
    title: string;
    description: string;
    cta: string;
  };
};

export const homeContent: Record<"en", HomeContent> = {
  en: {
    seo: {
      title: "Jobs & Recruitment in Poland | H&M Synergy",
      description:
        "H&M Synergy is an employment and recruitment agency in Poland connecting employers with workers and helping students, graduates and Ukrainian workers find employment in manufacturing, production, logistics and other sectors.",
      keywords: [
        "employment agency Poland",
        "recruitment agency Poland",
        "jobs in Poland",
        "work in Poland",
        "manufacturing jobs Poland",
        "production jobs Poland",
        "logistics jobs Poland",
        "warehouse jobs Poland",
        "student jobs Poland",
        "graduate jobs Poland",
        "jobs for students in Poland",
        "jobs for graduates in Poland",
        "Ukrainian jobs Poland",
        "jobs for Ukrainians in Poland",
        "work for Ukrainians in Poland",
      ],
      ogTitle: "H&M Synergy | Jobs & Recruitment in Poland",
      ogDescription:
        "Find jobs in Poland or reliable workers for your business. H&M Synergy supports employers and job seekers across manufacturing, production, logistics and other sectors.",
    },

    hero: {
      eyebrow: "Employment & workforce solutions in Poland",

      title: "Connecting the right people with the right opportunities.",

      description:
        "H&M Synergy is an employment and recruitment agency in Poland connecting employers with reliable workers and helping people find suitable employment. We focus on manufacturing, production, logistics, warehousing and other operational roles.",

      employerCta: "Find Workers",

      employeeCta: "Find a Job",

      areas: [
        "Manufacturing",
        "Production",
        "Logistics",
        "Warehousing",
      ],

      imageLabel: "H&M Synergy",

      imageDescription:
        "Employment and recruitment solutions connecting people and businesses in Poland.",
    },

    company: {
      eyebrow: "H&M Synergy",

      title: "People for businesses. Opportunities for people.",

      description:
        "We connect companies in Poland with workers who match their operational needs while helping job seekers find suitable employment. From recruitment and staffing to workforce coordination, we support both sides of the employment process.",

      cta: "Learn About Us",
    },

    services: {
      eyebrow: "Our services",

      title: "Recruitment and workforce solutions built around your business.",

      description:
        "We help employers find and coordinate workers for production, manufacturing, logistics, warehousing and other operational environments.",

      cta: "View All Services",

      items: [
        {
          title: "Workforce Solutions",

          description:
            "We help businesses find workers for production, manufacturing, warehouse, logistics and other operational positions according to their workforce requirements.",
        },

        {
          title: "Recruitment",

          description:
            "We source candidates and match them with suitable positions based on the requirements of the employer, workplace and role.",
        },

        {
          title: "Workforce Coordination",

          description:
            "We support communication and coordination throughout the employment process, helping employers and workers stay connected during their cooperation.",
        },
      ],
    },

    manufacturing: {
      eyebrow: "Manufacturing & production",

      title: "Supporting the people behind modern production.",

      description:
        "Manufacturing and production are key areas of our recruitment activity. We help employers find workers for injection molding, production lines, assembly and other industrial roles.",

      positions: [
        "Injection Machine Operators",
        "Production Workers",
        "Assembly Workers",
        "Manufacturing Workers",
      ],

      cta: "See Available Positions",
    },

    employers: {
      eyebrow: "For employers",

      title: "Need reliable workers for your operation?",

      description:
        "Tell us about your workforce requirements, the positions you need to fill and when you need people. We will work with you to identify a suitable recruitment and workforce solution.",

      steps: [
        "Tell us your requirements",
        "We source suitable candidates",
        "We support the employment process",
      ],

      cta: "Tell Us What You Need",
    },

    employees: {
      eyebrow: "For job seekers",

      title: "Find your next job in Poland.",

      description:
        "Explore employment opportunities in manufacturing, production, logistics, warehousing and other sectors. Students, graduates and Ukrainian workers in Poland are welcome to apply for suitable vacancies.",

      audience: [
        "Students looking for work in Poland",
        "Graduates starting their careers",
        "Ukrainian workers looking for employment in Poland",
        "Candidates looking for production and manufacturing jobs",
      ],

      jobsCta: "View Jobs",

      contactCta: "Contact Recruitment",
    },

    jobs: {
      eyebrow: "Current opportunities",

      title: "Find available jobs in Poland.",

      description:
        "Browse our current vacancies and find employment opportunities that match your skills, experience and availability.",

      listings: [
        {
          title: "Injection Machine Operator",
          meta: "Manufacturing · Production · Poland",
          details: "Full-time · Shift work",
        },

        {
          title: "Production Worker",
          meta: "Production · Poland",
          details: "Full-time · Shift work",
        },
      ],

      cta: "View All Jobs",
    },

    why: {
      eyebrow: "Why H&M Synergy",

      title: "A straightforward approach to recruitment and employment.",

      items: [
        {
          title: "Understanding Your Needs",

          description:
            "We take the time to understand the position, workplace, schedule and workforce requirements before sourcing candidates.",
        },

        {
          title: "Candidate Matching",

          description:
            "We look for candidates whose skills, experience and availability are suitable for the requirements of the position.",
        },

        {
          title: "Support Throughout the Process",

          description:
            "We remain available to support communication and coordination between employers and workers during the employment process.",
        },

        {
          title: "Clear Communication",

          description:
            "Straightforward communication helps employers and candidates understand the recruitment process and next steps.",
        },
      ],
    },

    finalCta: {
      title: "Let's find the right solution.",

      description:
        "Whether you are an employer looking for workers or a candidate looking for a job in Poland, H&M Synergy is ready to help.",

      cta: "Talk to Us",
    },
  },
};