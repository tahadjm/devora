import MaxWidthWrapper from "@/components/max-width-wrapper";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12+", label: "Countries Served" },
  { value: "50+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export default function Stats() {
  return (
    <section className="py-16">
      <MaxWidthWrapper className="max-w-[1440px]">
        <dl className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display text-5xl font-bold text-gold">
                {stat.value}
              </dd>
              <dt className="mt-3 font-mono text-xs font-medium uppercase tracking-widest text-ink-secondary">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </MaxWidthWrapper>
    </section>
  );
}
