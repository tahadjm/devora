"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const serviceOptions = [
  {
    value: "web-development",
    title: "Web Development",
    description: "Custom web applications and platforms",
  },
  {
    value: "mobile-app",
    title: "Mobile App",
    description: "iOS and Android native development",
  },
  {
    value: "custom-software",
    title: "Custom Software",
    description: "Enterprise software solutions",
  },
  {
    value: "ui-ux-design",
    title: "UI/UX Design",
    description: "User experience and interface design",
  },
  {
    value: "consulting",
    title: "Consulting",
    description: "Technical strategy and architecture",
  },
] as const;

const serviceValues = serviceOptions.map((option) => option.value) as [
  (typeof serviceOptions)[number]["value"],
  ...(typeof serviceOptions)[number]["value"][],
];

const budgetTiers = [
  "Under $10k",
  "$10k – $50k",
  "$50k – $100k",
  "$100k – $250k",
  "$250k+",
] as const;

const contactFormSchema = z.object({
  fullName: z
    .string({ error: "Enter your full name" })
    .trim()
    .min(2, "Enter your full name")
    .max(80, "Keep it under 80 characters"),
  email: z
    .email({ error: "Enter a valid email address" })
    .trim(),
  phone: z
    .string()
    .trim()
    .refine((value) => value.length === 0 || /^[+()\-\s\d]{7,20}$/.test(value), {
      message: "Enter a valid phone number",
    }),
  company: z.string().trim().max(100, "Keep it under 100 characters"),
  subject: z
    .string({ error: "Give your request a short subject" })
    .trim()
    .min(3, "Give your request a short subject")
    .max(120, "Keep it under 120 characters"),
  service: z.enum(serviceValues, { error: "Select a service" }),
  budget: z.number().int().min(0).max(budgetTiers.length - 1),
  projectDetails: z
    .string({ error: "Tell us about your project" })
    .trim()
    .min(20, "Add a few more details (20 characters minimum)")
    .max(2000, "Keep it under 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  service: "web-development",
  budget: 2,
  projectDetails: "",
};

const pillInputClassName =
  "h-12 rounded-full border-zinc-200 bg-white px-5 text-sm shadow-[0_2px_4px_rgba(0,0,0,0.06)] focus-visible:ring-gold/30";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onTouched",
  });

  async function onSubmit() {
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[20px] border border-zinc-100 bg-white px-6 py-20 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl font-bold text-ink">
          Message sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-secondary">
          Thanks for reaching out — our team will review your request and get
          back to you within 24 hours.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-2"
          onClick={() => {
            reset(defaultValues);
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 rounded-[20px] border border-zinc-100 bg-white p-6 sm:p-10"
    >
      <div>
        <h3 className="font-display text-2xl font-bold text-ink sm:text-[28px]">
          Request a Solution
        </h3>
        <p className="mt-2 text-[15px] text-ink-secondary">
          Tell us about your project and our team will reach out within 24
          hours.
        </p>
      </div>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 font-display text-base font-bold text-ink">
          Contact Information
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName" className="sr-only">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Full Name"
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={pillInputClassName}
              {...register("fullName")}
            />
            <FieldError id="fullName-error" message={errors.fullName?.message} />
          </div>

          <div>
            <Label htmlFor="email" className="sr-only">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={pillInputClassName}
              {...register("email")}
            />
            <FieldError id="email-error" message={errors.email?.message} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="phone" className="sr-only">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={pillInputClassName}
              {...register("phone")}
            />
            <FieldError id="phone-error" message={errors.phone?.message} />
          </div>

          <div>
            <Label htmlFor="company" className="sr-only">
              Company / Organization
            </Label>
            <Input
              id="company"
              placeholder="Company / Organization"
              autoComplete="organization"
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={pillInputClassName}
              {...register("company")}
            />
            <FieldError id="company-error" message={errors.company?.message} />
          </div>
        </div>

        <div>
          <Label htmlFor="subject" className="sr-only">
            Subject
          </Label>
          <Input
            id="subject"
            placeholder="Subject"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={pillInputClassName}
            {...register("subject")}
          />
          <FieldError id="subject-error" message={errors.subject?.message} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-4 font-display text-base font-bold text-ink">
          Select a Service
        </legend>

        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              aria-invalid={!!errors.service}
            >
              {serviceOptions.map((option) => (
                <div key={option.value} className="flex items-start gap-3">
                  <RadioGroupItem
                    value={option.value}
                    id={`service-${option.value}`}
                    className="mt-0.5 border-zinc-300 data-checked:border-gold data-checked:bg-gold"
                  />
                  <label
                    htmlFor={`service-${option.value}`}
                    className="cursor-pointer select-none"
                  >
                    <span className="block text-sm font-semibold text-ink">
                      {option.title}
                    </span>
                    <span className="block text-xs text-ink-secondary">
                      {option.description}
                    </span>
                  </label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
        <FieldError id="service-error" message={errors.service?.message} />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 font-display text-base font-bold text-ink">
          Budget Range
        </legend>

        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <>
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-semibold text-ink">
                  Estimated Budget
                </span>
                <span className="font-bold text-ink">
                  {budgetTiers[field.value]}
                </span>
              </div>

              <Slider
                value={[field.value]}
                min={0}
                max={budgetTiers.length - 1}
                step={1}
                onValueChange={([value]) => field.onChange(value)}
                aria-label="Estimated budget"
                className={cn(
                  "py-2",
                  "[&_[data-slot=slider-track]]:bg-zinc-100",
                  "[&_[data-slot=slider-range]]:bg-ink",
                  "[&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-gold",
                )}
              />
            </>
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 font-display text-base font-bold text-ink">
          Project Details
        </legend>

        <Label htmlFor="projectDetails" className="text-sm font-medium text-ink">
          Describe your project
        </Label>
        <Textarea
          id="projectDetails"
          rows={5}
          placeholder="Please include timelines, goals, and any technical requirements."
          aria-invalid={!!errors.projectDetails}
          aria-describedby={
            errors.projectDetails ? "projectDetails-error" : undefined
          }
          className="rounded-xl border-zinc-200 bg-white px-4 py-3 text-sm shadow-[0_2px_4px_rgba(0,0,0,0.06)] focus-visible:ring-gold/30"
          {...register("projectDetails")}
        />
        <FieldError
          id="projectDetails-error"
          message={errors.projectDetails?.message}
        />
      </fieldset>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          className="border-gold/60"
          onClick={() => reset(defaultValues)}
          disabled={status === "submitting"}
        >
          Reset
        </Button>
        <Button
          type="submit"
          variant="accent"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Request"}
        </Button>
      </div>
    </form>
  );
}
