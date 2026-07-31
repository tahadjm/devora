import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SectionBadge from "./section-badge";

const filters = [
  "All",
  "E-commerce",
  "SaaS",
  "Portfolio",
  "Mobile App",
  "Landing Page",
  "Dashboard",
];

const projects: {
  name: string;
  country: string;
  description: string;
  stack: string[];
  imageClassName: string;
  featured?: boolean;
}[] = [
  {
    name: "Nayef Logistics",
    country: "Saudi Arabia",
    description:
      "Fleet management platform with real-time tracking, driver scheduling, and automated reporting.",
    stack: ["React", "Node.js", "PostgreSQL"],
    imageClassName: "from-[#1a1408] via-[#3a2f14] to-[#7a6420]",
  },
  {
    name: "Bloom Beauty",
    country: "UAE",
    description:
      "E-commerce app with AR try-on, subscription boxes, and integrated loyalty program.",
    stack: ["Flutter", "Firebase", "Stripe"],
    imageClassName: "from-gold-soft via-[#f7efe0] to-zinc-100",
    featured: true,
  },
  {
    name: "Atlas Academy",
    country: "Jordan",
    description:
      "Online learning platform serving 10,000+ students with live classes, quizzes, and certifications.",
    stack: ["Next.js", "Python", "AWS"],
    imageClassName: "from-[#101828] via-[#1e2a5a] to-info/50",
  },
  {
    name: "Raya Health",
    country: "Egypt",
    description:
      "Telemedicine platform connecting patients with specialists through video consultations and AI symptom tracking.",
    stack: ["React Native", "Python", "MongoDB"],
    imageClassName: "from-[#101828] via-[#233a52] to-[#3d5a73]",
  },
  {
    name: "Verde Market",
    country: "Brazil",
    description:
      "Sustainable marketplace for local farmers with real-time inventory, delivery routing, and carbon tracking.",
    stack: ["Vue.js", "Go", "Redis"],
    imageClassName: "from-[#0f1f14] via-[#1e3a28] to-success/50",
  },
  {
    name: "Pulse Analytics",
    country: "Germany",
    description:
      "Real-time business intelligence dashboard with predictive modeling and automated anomaly detection.",
    stack: ["TypeScript", "Spark", "Kafka"],
    imageClassName: "from-[#1a1020] via-[#33204a] to-[#5a3d73]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <MaxWidthWrapper className="max-w-[1440px]">
        <SectionBadge>Portfolio</SectionBadge>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-bold text-ink">
          Real solutions for real businesses — explore how we helped our
          clients grow
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          {filters.map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "inline-flex h-8 items-center rounded-full px-4 text-sm",
                i === 0
                  ? "bg-gold font-medium text-white"
                  : "border border-zinc-200 bg-white text-ink-secondary",
              )}
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className={cn(
                "gap-0 overflow-hidden bg-white p-0 ring-1 ring-zinc-200/70",
                project.featured && "ring-2 ring-gold",
              )}
            >
              <div
                className={`h-64 w-full bg-gradient-to-br ${project.imageClassName}`}
                role="img"
                aria-label={`${project.name} project preview`}
              />
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {project.name}
                  </h3>
                  <Badge variant="secondary" className="h-5 px-2 text-[11px] text-ink-secondary">
                    {project.country}
                  </Badge>
                </div>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex h-[22px] items-center rounded-md bg-zinc-100 px-2.5 text-xs text-ink-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.featured ? (
                  <Button variant="secondary" size="sm" className="mt-1 w-full">
                    See Project Details
                  </Button>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
