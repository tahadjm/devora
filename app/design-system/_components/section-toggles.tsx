import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import SectionHeading from "./section-heading";

const panel =
  "bg-white/78 p-6 ring-0 shadow-[0_10px_28px_rgba(0,0,0,0.04)] backdrop-blur-xl";

export default function SectionToggles() {
  return (
    <section id="toggles" className="border-t border-zinc-200/70 py-16">
      <MaxWidthWrapper>
        <SectionHeading
          index="08"
          title="Interactive Toggles & Selectors"
          description="System-level interactive switch configurations, checkbox modes, and option selection frameworks."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className={panel}>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Toggle Switches
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Switch defaultChecked className="data-checked:bg-gold" id="ds-switch-on" />
                <Label htmlFor="ds-switch-on" className="font-normal">
                  System Edge Cache
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch className="data-checked:bg-gold" id="ds-switch-off" />
                <Label htmlFor="ds-switch-off" className="font-normal">
                  Maintenance Core Window
                </Label>
              </div>
            </div>
          </Card>

          <Card className={panel}>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Checkboxes
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Checkbox defaultChecked id="ds-check-1" />
                <Label htmlFor="ds-check-1" className="font-normal">
                  Include beta developer features
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="ds-check-2" />
                <Label htmlFor="ds-check-2" className="font-normal">
                  Auto-renew database snapshots
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox checked="indeterminate" id="ds-check-3" />
                <Label htmlFor="ds-check-3" className="font-normal">
                  Deploy regions (Partial select)
                </Label>
              </div>
            </div>
          </Card>

          <Card className={panel}>
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-wider text-ink-muted">
              Radio Options
            </p>
            <RadioGroup defaultValue="production" className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="production"
                  id="ds-radio-1"
                  className="data-checked:border-gold data-checked:text-gold"
                />
                <Label htmlFor="ds-radio-1" className="font-normal">
                  Production (Dedicated node)
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="staging"
                  id="ds-radio-2"
                  className="data-checked:border-gold data-checked:text-gold"
                />
                <Label htmlFor="ds-radio-2" className="font-normal">
                  Staging (Shared node cluster)
                </Label>
              </div>
            </RadioGroup>
          </Card>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
