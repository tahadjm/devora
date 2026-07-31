const sections = [
  {
    heading: "Getting Started",
    items: ["Introduction", "Design Principles", "Light Mode Overview"],
    active: "Light Mode Overview",
  },
  {
    heading: "Foundations",
    items: ["Color Palette", "Typography Scale"],
  },
  {
    heading: "Components",
    items: [
      "Buttons & Triggers",
      "Form Inputs",
      "Badges & Pills",
      "Cards",
      "Navigation Elements",
      "Avatars & Overlaps",
      "Toggles & Selectors",
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-[280px] shrink-0 border-r border-zinc-200/60 bg-white/78 lg:block">
      <nav className="sticky top-[72px] flex flex-col gap-7 p-8" aria-label="Index">
        {sections.map((section) => (
          <div key={section.heading}>
            <p className="mb-2.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              {section.heading}
            </p>
            <ul className="flex flex-col gap-1.5">
              {section.items.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={
                      item === section.active
                        ? "text-sm font-medium text-gold-deep"
                        : "text-sm text-ink-secondary transition-colors hover:text-ink"
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
