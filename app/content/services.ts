export type ServicesContent = {
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
  };

  services: {
    title: string;
    description: string;
    href: string;
  }[];

  cta: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export const servicesContent: Record<"en" | "pl" | "ua", ServicesContent> = {
  // =========================================================
  // ENGLISH
  // =========================================================

  en: {
    seo: {
      title: "Employment, Recruitment & Business Services in Poland",

      description:
        "H&M Synergy provides employment and recruitment services for businesses in Poland, including workforce solutions, manufacturing and production recruitment, logistics support, and IT and digital services.",

      keywords: [
        "employment services Poland",
        "recruitment services Poland",
        "employment agency Poland",
        "recruitment agency Poland",
        "workforce solutions Poland",
        "staffing Poland",
        "manufacturing recruitment Poland",
        "production recruitment Poland",
        "logistics services Poland",
        "business services Poland",
        "IT services Poland",
        "student jobs Poland",
        "graduate jobs Poland",
        "Ukrainian workers Poland",
    ],

      ogTitle: "Employment & Business Services in Poland | H&M Synergy",

      ogDescription:
        "Workforce, recruitment, logistics, business and IT solutions for companies operating in Poland.",
    },

    hero: {
      eyebrow: "Our services",

      title: "Practical solutions for people and businesses.",

      description:
        "H&M Synergy supports companies operating in Poland with workforce and recruitment solutions, while also providing selected logistics, business and IT services.",
    },

    services: [
      {
        title: "Employment & Workforce Solutions",

        description:
          "Recruitment and staffing solutions for companies looking for reliable workers. We source candidates for manufacturing, production, warehousing, logistics and other operational positions, with a focus on matching people to the requirements of each role.",

        href: "/en/services/employment",
      },

      {
        title: "Logistics",

        description:
          "Logistics and operational support for businesses in Poland. We help companies coordinate practical logistics requirements and keep day-to-day operations moving efficiently.",

        href: "/en/services/logistics",
      },

      {
        title: "Business & IT Solutions",

        description:
          "Digital and business support designed for modern companies, including websites, web applications and other practical solutions that help businesses operate and grow.",

        href: "/en/services/it",
      },
    ],

    cta: {
      eyebrow: "Let's work together",

      title: "Looking for the right solution for your business?",

      description:
        "Tell us about your workforce, logistics, business or IT requirements and we'll discuss how H&M Synergy can help.",

      href: "/en/contact",

      label: "Contact Us",
    },
  },

  // =========================================================
  // POLISH
  // =========================================================

  pl: {
    seo: {
      title: "Usługi pracy, rekrutacji i biznesowe w Polsce | H&M Synergy",

      description:
        "H&M Synergy oferuje usługi z zakresu zatrudnienia i rekrutacji pracowników w Polsce, w tym rozwiązania kadrowe, rekrutację do produkcji i przemysłu, wsparcie logistyczne oraz usługi biznesowe i IT.",

      keywords: [
        "agencja pracy Polska",
        "agencja pracy w Polsce",
        "agencja rekrutacyjna Polska",
        "rekrutacja pracowników Polska",
        "usługi rekrutacyjne Polska",
        "usługi zatrudnienia Polska",
        "rozwiązania kadrowe Polska",
        "pracownicy dla firm Polska",
        "outsourcing pracowników Polska",
        "rekrutacja pracowników produkcji",
        "rekrutacja pracowników przemysłowych",
        "praca produkcja Polska",
        "pracownicy produkcji Polska",
        "operatorzy maszyn Polska",
        "praca magazyn Polska",
        "usługi logistyczne Polska",
        "logistyka dla firm Polska",
        "usługi biznesowe Polska",
        "usługi IT Polska",
        "strony internetowe dla firm",
        "aplikacje internetowe dla firm",
        "praca dla studentów Polska",
        "praca dla absolwentów Polska",
        "pracownicy z Ukrainy Polska",
      ],

      ogTitle:
        "Usługi pracy, rekrutacji i biznesowe w Polsce | H&M Synergy",

      ogDescription:
        "Rozwiązania kadrowe, rekrutacja, logistyka oraz usługi biznesowe i IT dla firm działających w Polsce.",
    },

    hero: {
      eyebrow: "Nasze usługi",

      title: "Praktyczne rozwiązania dla ludzi i firm.",

      description:
        "H&M Synergy wspiera firmy działające w Polsce, oferując rozwiązania kadrowe i rekrutacyjne, a także wybrane usługi logistyczne, biznesowe i IT.",
    },

    services: [
      {
        title: "Zatrudnienie i rozwiązania kadrowe",

        description:
          "Rozwiązania rekrutacyjne i kadrowe dla firm poszukujących odpowiednich pracowników. Pozyskujemy kandydatów do produkcji, przemysłu, magazynów, logistyki i innych stanowisk operacyjnych, koncentrując się na dopasowaniu pracowników do wymagań konkretnego stanowiska.",

        href: "/pl/services/employment",
      },

      {
        title: "Logistyka",

        description:
          "Wsparcie logistyczne i operacyjne dla firm w Polsce. Pomagamy przedsiębiorstwom w organizacji praktycznych procesów logistycznych i sprawnym prowadzeniu codziennych operacji.",

        href: "/pl/services/logistics",
      },

      {
        title: "Rozwiązania biznesowe i IT",

        description:
          "Wsparcie cyfrowe i biznesowe dla nowoczesnych firm, obejmujące między innymi strony internetowe, aplikacje internetowe oraz inne praktyczne rozwiązania pomagające przedsiębiorstwom sprawnie działać i rozwijać się.",
        
        href: "/pl/services/it",
      },
    ],

    cta: {
      eyebrow: "Współpracujmy",

      title: "Szukasz odpowiedniego rozwiązania dla swojej firmy?",

      description:
        "Opowiedz nam o swoich potrzebach związanych z pracownikami, logistyką, biznesem lub IT. Porozmawiamy o tym, jak H&M Synergy może pomóc Twojej firmie.",

      href: "/pl/contact",

      label: "Skontaktuj się z nami",
    },
  },

  // =========================================================
  // UKRAINIAN
  // =========================================================

  ua: {
    seo: {
      title: "Послуги з працевлаштування, рекрутингу та бізнесу в Польщі | H&M Synergy",

      description:
        "H&M Synergy надає послуги з працевлаштування та рекрутингу для бізнесу в Польщі, включаючи кадрові рішення, підбір персоналу для виробництва, логістичну підтримку, а також ІТ та цифрові послуги.",

      keywords: [
        "послуги працевлаштування Польща",
        "рекрутингові послуги Польща",
        "агентство з працевлаштування Польща",
        "рекрутингове агентство Польща",
        "кадрові рішення Польща",
        "підбір персоналу Польща",
        "рекрутинг на виробництво Польща",
        "підбір працівників на виробництво Польща",
        "логістичні послуги Польща",
        "бізнес-послуги Польща",
        "ІТ-послуги Польща",
        "робота для студентів Польща",
        "робота для випускників Польща",
        "українські працівники Польща",
      ],

      ogTitle: "Послуги з працевлаштування та бізнесу в Польщі | H&M Synergy",

      ogDescription:
        "Кадрові рішення, рекрутинг, логістика, бізнес- та ІТ-рішення для компаній, що працюють у Польщі.",
    },

    hero: {
      eyebrow: "Наші послуги",

      title: "Практичні рішення для людей та бізнесу.",

      description:
        "H&M Synergy підтримує компанії, що працюють у Польщі, рішеннями у сфері персоналу та рекрутингу, а також надає вибрані логістичні, бізнес- та ІТ-послуги.",
    },

    services: [
      {
        title: "Працевлаштування та кадрові рішення",

        description:
          "Рішення з рекрутингу та підбору персоналу для компаній, які шукають надійних працівників. Ми знаходимо кандидатів для виробництва, складів, логістики та інших операційних посад, зосереджуючись на відповідності людей вимогам кожної ролі.",

        href: "/ua/services/employment",
      },

      {
        title: "Логістика",

        description:
          "Логістична та операційна підтримка для бізнесу в Польщі. Ми допомагаємо компаніям координувати практичні логістичні потреби та забезпечувати ефективне повсякденне функціонування.",

        href: "/ua/services/logistics",
      },

      {
        title: "Бізнес та ІТ-рішення",

        description:
          "Цифрова та бізнес-підтримка, розроблена для сучасних компаній, включаючи веб-сайти, веб-додатки та інші практичні рішення, які допомагають підприємствам працювати та розвиватися.",
        
        href: "/ua/services/it",
      },
    ],

    cta: {
      eyebrow: "Давайте працювати разом",

      title: "Шукаєте правильне рішення для вашого бізнесу?",

      description:
        "Розкажіть нам про ваші кадрові, логістичні, бізнес- або ІТ-потреби, і ми обговоримо, як H&M Synergy може допомогти.",

      href: "/ua/contact",

      label: "Зв'яжіться з нами",
    },
  },
};