import { architectureLayers } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="border-t border-emerald-500/10 py-24">
      <Container>
        <SectionHeading
          title="A system built to work with or without signal"
          description="Data moves upward from the field. Inference happens on the device. The cloud layer only aggregates, never blocks a diagnosis."
        />

        <div className="mt-14 space-y-3">
          {architectureLayers.map((layer, i) => (
            <div key={layer.layer} className="glass-card rounded-xl p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-emerald-500/70">
                  Layer {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-medium text-slate-100">{layer.layer}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-emerald-500/15 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {i < architectureLayers.length - 1 && (
                <div className="mt-3 flex justify-center">
                  <span className="h-4 w-px bg-emerald-500/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
