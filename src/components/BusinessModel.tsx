import { Landmark, Building2, Users } from "lucide-react";
import { businessTiers } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Landmark, Building2, Users];

export default function BusinessModel() {
  return (
    <section id="business" className="border-t border-emerald-500/10 py-24">
      <Container>
        <SectionHeading
          title="Three ways CropBuddy sustains itself"
          description="Free access for the farmer at the centre of it, with paid layers around the edges that don't compromise that access."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {businessTiers.map((tier, i) => {
            const Icon = icons[i];
            return (
              <div key={tier.tier} className="rounded-xl border border-emerald-500/15 bg-slate-900/30 p-6">
                <Icon className="h-5 w-5 text-amber-400" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-medium text-slate-100">{tier.tier}</h3>
                <p className="mt-1 text-xs text-emerald-500/80">{tier.audience}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{tier.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
