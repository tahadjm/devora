import { Search } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionHeading from "./section-heading";

export default function SectionInputs() {
  return (
    <section id="inputs" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="04"
          title="Input Fields & Form Controls"
          description="A robust suite of text inputs, textareas, and select components mapped across state indicators."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-email">Default Email Input</Label>
              <Input id="ds-email" type="email" placeholder="e.g. engineering@devora.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-search">Focused Search Input</Label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-muted"
                  aria-hidden
                />
                <Input
                  id="ds-search"
                  type="search"
                  defaultValue="Kubernetes architecture"
                  className="border-gold pl-9"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-error">Email Input (Error State)</Label>
              <Input id="ds-error" defaultValue="wrong_email_format.com" aria-invalid />
              <p className="text-xs text-error">Please enter a valid business email.</p>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-disabled">Disabled State</Label>
              <Input id="ds-disabled" placeholder="Cannot edit parameter" disabled />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="ds-textarea">Textarea Component</Label>
              <Textarea
                id="ds-textarea"
                placeholder="Provide system documentation details..."
                className="min-h-[100px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Select Dropdown</Label>
              <Select defaultValue="us-east-1">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us-east-1">US East (N. Virginia) - us-east-1</SelectItem>
                  <SelectItem value="eu-west-1">EU West (Ireland) - eu-west-1</SelectItem>
                  <SelectItem value="ap-south-1">Asia Pacific (Mumbai) - ap-south-1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
