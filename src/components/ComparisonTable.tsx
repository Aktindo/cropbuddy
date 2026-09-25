import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ComparisonTable() {
  return (
    <section id="features" className="border-t border-emerald-500/10 py-24">
      <Container>
        <SectionHeading
          title="Built to replace guesswork with prediction"
          description="Existing agri-advisory tools stop at symptom lookup. CropBuddy runs the diagnosis, the prediction, and the remediation plan on the device itself."
        />

        <div className="mt-12 overflow-hidden rounded-xl border border-emerald-500/15">
          <div className="grid grid-cols-3 bg-slate-900/60 text-xs text-slate-500">
            <div className="px-5 py-3">Dimension</div>
            <div className="px-5 py-3 border-l border-emerald-500/10">Conventional platforms</div>
            <div className="px-5 py-3 border-l border-emerald-500/10 text-emerald-400">CropBuddy</div>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.axis}
              className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/25"}`}
            >
              <div className="px-5 py-4 text-slate-300 font-medium">{row.axis}</div>
              <div className="flex items-start gap-2 border-l border-emerald-500/10 px-5 py-4 text-slate-500">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-600" />
                {row.conventional}
              </div>
              <div className="flex items-start gap-2 border-l border-emerald-500/10 px-5 py-4 text-slate-200">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                {row.cropbuddy}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
