import { ipmFormula } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function IPMFormulation() {
  return (
    <section id="ipm" className="border-t border-emerald-500/10 bg-slate-900/20 py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            title="Dosage that matches the field, not the label"
            description="Over-application is the default outcome of a generic bottle instruction. CropBuddy scales every recommendation to the farmer's exact plot and the severity it just measured."
          />
          <div className="mt-8 space-y-4">
            {ipmFormula.variables.map((v) => (
              <div key={v.symbol} className="flex gap-4 border-l border-amber-500/25 pl-4">
                <span className="w-40 shrink-0 text-sm text-amber-400">{v.symbol}</span>
                <span className="text-sm text-slate-500">{v.meaning}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8">
          <p className="text-xs text-slate-500">{ipmFormula.title}</p>
          <div className="mt-6 rounded-lg border border-emerald-500/15 bg-slate-950/60 p-6 font-mono text-sm leading-loose text-emerald-300 overflow-x-auto">
            <div>Dosage(total) =</div>
            <div className="pl-4">
              Land Area (Acres) ×
            </div>
            <div className="pl-4">
              ( Standard Field Rate ÷ Dilution Ratio )
            </div>
            <div className="pl-4">× Severity Index Factor</div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            The Severity Index Factor comes directly from the on-device heatmap in
            step three of the diagnosis, so the same disease produces a lighter
            dose on a barely-affected leaf and a stronger one on a heavily
            infected plot.
          </p>
        </div>
      </Container>
    </section>
  );
}
