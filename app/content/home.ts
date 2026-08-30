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

export const homeContent: Record<"en" | "pl", HomeContent> = {
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

  // =========================================================
  // POLISH
  // =========================================================

  pl: {
    seo: {
      title: "Praca i rekrutacja w Polsce | H&M Synergy",

      description:
        "H&M Synergy to agencja pracy i rekrutacji w Polsce. Łączymy pracodawców z odpowiednimi pracownikami oraz pomagamy studentom, absolwentom i kandydatom z Ukrainy znaleźć pracę w produkcji, przemyśle, logistyce, magazynach i innych branżach.",

      keywords: [
        "agencja pracy Polska",
        "agencja pracy w Polsce",
        "agencja rekrutacyjna Polska",
        "rekrutacja pracowników Polska",
        "praca w Polsce",
        "oferty pracy w Polsce",
        "praca na produkcji",
        "praca produkcja",
        "praca w przemyśle",
        "praca jako operator maszyn",
        "operator maszyn praca",
        "praca przy wtryskarkach",
        "operator wtryskarki",
        "praca magazyn",
        "praca magazynowa",
        "praca w logistyce",
        "praca dla studentów",
        "praca dla studentów w Polsce",
        "praca dla absolwentów",
        "praca dla absolwentów w Polsce",
        "praca dla Ukraińców w Polsce",
        "praca dla cudzoziemców w Polsce",
        "zatrudnienie w Polsce",
      ],

      ogTitle: "H&M Synergy | Praca i rekrutacja w Polsce",

      ogDescription:
        "Szukasz pracy w Polsce lub pracowników dla swojej firmy? H&M Synergy wspiera pracodawców i osoby poszukujące pracy w produkcji, przemyśle, logistyce, magazynach i innych branżach.",
    },

    hero: {
      eyebrow: "Praca i rozwiązania kadrowe w Polsce",

      title: "Łączymy właściwych ludzi z odpowiednimi możliwościami.",

      description:
        "H&M Synergy to agencja pracy i rekrutacji w Polsce, która łączy pracodawców z odpowiednimi pracownikami i pomaga kandydatom znaleźć dopasowane zatrudnienie. Koncentrujemy się na produkcji, przemyśle, logistyce, magazynach i innych stanowiskach operacyjnych.",

      employerCta: "Znajdź pracowników",

      employeeCta: "Znajdź pracę",

      areas: [
        "Produkcja",
        "Przemysł",
        "Logistyka",
        "Magazyny",
      ],

      imageLabel: "H&M Synergy",

      imageDescription:
        "Rozwiązania z zakresu zatrudnienia i rekrutacji łączące ludzi i firmy w Polsce.",
    },

    company: {
      eyebrow: "H&M Synergy",

      title: "Ludzie dla firm. Możliwości dla ludzi.",

      description:
        "Łączymy firmy w Polsce z pracownikami odpowiadającymi ich potrzebom, jednocześnie pomagając osobom poszukującym pracy znaleźć odpowiednie zatrudnienie. Od rekrutacji i pozyskiwania pracowników po koordynację współpracy — wspieramy obie strony procesu zatrudnienia.",

      cta: "Dowiedz się o nas więcej",
    },

    services: {
      eyebrow: "Nasze usługi",

      title: "Rekrutacja i rozwiązania kadrowe dopasowane do potrzeb Twojej firmy.",

      description:
        "Pomagamy pracodawcom znaleźć i koordynować pracowników do produkcji, przemysłu, logistyki, magazynów oraz innych środowisk operacyjnych.",

      cta: "Zobacz wszystkie usługi",

      items: [
        {
          title: "Rozwiązania kadrowe",

          description:
            "Pomagamy firmom znaleźć pracowników do produkcji, przemysłu, magazynów, logistyki i innych stanowisk operacyjnych, zgodnie z ich zapotrzebowaniem kadrowym.",
        },

        {
          title: "Rekrutacja",

          description:
            "Pozyskujemy kandydatów i dopasowujemy ich do odpowiednich stanowisk, uwzględniając wymagania pracodawcy, miejsca pracy oraz konkretnej roli.",
        },

        {
          title: "Koordynacja pracowników",

          description:
            "Wspieramy komunikację i koordynację na kolejnych etapach procesu zatrudnienia, pomagając pracodawcom i pracownikom sprawnie współpracować.",
        },
      ],
    },

    manufacturing: {
      eyebrow: "Produkcja i przemysł",

      title: "Wspieramy ludzi, którzy stoją za nowoczesną produkcją.",

      description:
        "Produkcja i przemysł to kluczowe obszary naszej działalności rekrutacyjnej. Pomagamy pracodawcom znaleźć pracowników do obsługi wtryskarek, linii produkcyjnych, montażu oraz innych stanowisk przemysłowych.",

      positions: [
        "Operatorzy wtryskarek",
        "Pracownicy produkcji",
        "Pracownicy montażu",
        "Pracownicy przemysłowi",
      ],

      cta: "Zobacz dostępne stanowiska",
    },

    employers: {
      eyebrow: "Dla pracodawców",

      title: "Potrzebujesz sprawdzonych pracowników do swojej firmy?",

      description:
        "Powiedz nam, jakich pracowników potrzebujesz, jakie stanowiska chcesz obsadzić i kiedy potrzebujesz dodatkowych osób. Wspólnie dobierzemy odpowiednie rozwiązanie rekrutacyjne i kadrowe.",

      steps: [
        "Przedstaw nam swoje potrzeby",
        "Znajdziemy odpowiednich kandydatów",
        "Wesprzemy proces zatrudnienia",
      ],

      cta: "Opowiedz nam, czego potrzebujesz",
    },

    employees: {
      eyebrow: "Dla osób poszukujących pracy",

      title: "Znajdź swoją kolejną pracę w Polsce.",

      description:
        "Poznaj aktualne możliwości zatrudnienia w produkcji, przemyśle, logistyce, magazynach i innych branżach. Studenci, absolwenci oraz pracownicy z Ukrainy w Polsce są szczególnie mile widziani przy odpowiednich ofertach pracy.",

      audience: [
        "Studenci szukający pracy w Polsce",
        "Absolwenci rozpoczynający karierę zawodową",
        "Pracownicy z Ukrainy szukający pracy w Polsce",
        "Kandydaci zainteresowani pracą w produkcji i przemyśle",
      ],

      jobsCta: "Zobacz oferty pracy",

      contactCta: "Skontaktuj się z rekrutacją",
    },

    jobs: {
      eyebrow: "Aktualne oferty pracy",

      title: "Znajdź dostępne oferty pracy w Polsce.",

      description:
        "Przejrzyj nasze aktualne oferty pracy i znajdź zatrudnienie dopasowane do Twoich umiejętności, doświadczenia oraz dyspozycyjności.",

      listings: [
        {
          title: "Operator wtryskarki",

          meta: "Produkcja · Przemysł · Polska",

          details: "Pełny etat · Praca zmianowa",
        },

        {
          title: "Pracownik produkcji",

          meta: "Produkcja · Polska",

          details: "Pełny etat · Praca zmianowa",
        },
      ],

      cta: "Zobacz wszystkie oferty",
    },

    why: {
      eyebrow: "Dlaczego H&M Synergy",

      title: "Proste i przejrzyste podejście do rekrutacji i zatrudnienia.",

      items: [
        {
          title: "Poznajemy Twoje potrzeby",

          description:
            "Przed rozpoczęciem rekrutacji dokładnie poznajemy stanowisko, miejsce pracy, harmonogram oraz wymagania dotyczące pracowników.",
        },

        {
          title: "Dopasowujemy kandydatów",

          description:
            "Szukamy kandydatów, których umiejętności, doświadczenie i dyspozycyjność odpowiadają wymaganiom danego stanowiska.",
        },

        {
          title: "Wspieramy cały proces",

          description:
            "Pozostajemy dostępni, aby wspierać komunikację i koordynację pomiędzy pracodawcami i pracownikami podczas procesu zatrudnienia.",
        },

        {
          title: "Stawiamy na jasną komunikację",

          description:
            "Przejrzysta komunikacja pomaga pracodawcom i kandydatom dobrze zrozumieć proces rekrutacji oraz kolejne kroki.",
        },
      ],
    },

    finalCta: {
      title: "Znajdźmy odpowiednie rozwiązanie.",

      description:
        "Niezależnie od tego, czy jesteś pracodawcą szukającym pracowników, czy kandydatem szukającym pracy w Polsce, H&M Synergy jest gotowe Ci pomóc.",

      cta: "Skontaktuj się z nami",
    },
  },
};