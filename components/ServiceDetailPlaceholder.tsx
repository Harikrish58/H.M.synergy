import Link from "next/link";

type ServiceDetailPlaceholderProps = {
  title: string;
};

export default function ServiceDetailPlaceholder({
  title,
}: ServiceDetailPlaceholderProps) {
  return (
    <main className="bg-white px-6 py-20 text-[#182230] sm:px-10 lg:px-8 lg:py-28">
      <section className="mx-auto max-w-[1280px] border-y border-[#E2E8EF] py-14 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A86]">
          Our services
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#0E2942] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B6878]">
          Service details will be available here soon.
        </p>
        <Link
          href="/en/services"
          className="mt-8 inline-flex text-sm font-semibold text-[#123B63] hover:text-[#159A86] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159A86] focus-visible:ring-offset-2"
        >
          Back to services
        </Link>
      </section>
    </main>
  );
}
