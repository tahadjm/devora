export default function SectionHeading({
  index,
  title,
  description,
}: Readonly<{ index: string; title: string; description: string }>) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="font-display text-[28px] font-semibold text-ink">
        {index}. {title}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">{description}</p>
    </div>
  );
}
