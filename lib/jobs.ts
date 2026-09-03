export type Job = {
  slug: string;
  code: string;

  title: {
    en: string;
    pl: string;
    ua: string;
  };

  location: {
    en: string;
    pl: string;
    ua: string;
  };

  category: {
    en: string;
    pl: string;
    ua: string;
  };
};

export const jobs: Job[] = [
  {
    slug: "injection-machine-operator",
    code: "HMS-260801",

    title: {
      en: "Injection Machine Operator",
      pl: "Operator wtryskarki",
      ua: "Оператор термопластавтомата",
    },

    location: {
      en: "Wrocław, Lower Silesia",
      pl: "Wrocław, Dolny Śląsk",
      ua: "Вроцлав, Нижньосілезьке воєводство",
    },

    category: {
      en: "Manufacturing",
      pl: "Produkcja",
      ua: "Виробництво",
    },
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}