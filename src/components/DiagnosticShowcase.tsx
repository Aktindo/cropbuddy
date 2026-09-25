import { Camera, Cpu, ScanEye, FlaskConical } from "lucide-react";
import { workflowSteps, remediationTiers } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const stepIcons = [Camera, Cpu, ScanEye, FlaskConical];

export default function DiagnosticShowcase() {
  return (
    <section id="workflow" className="border-t border-emerald-500/10 bg-slate-900/20 py-24">
      <Container>
        <SectionHeading
          title="From leaf to remediation plan in one scan"
          description="Four steps, all completed on the device, so a farmer in a low-signal field gets the same answer as one standing beside a fibre line."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step.step} className="relative">
                {i < workflowSteps.length - 1 && (
                  <span className="hidden lg:block absolute top-6 left-[calc(100%-0.75rem)] w-8 h-px bg-emerald-500/20" />
                )}
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/5">
                    <Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-slate-600">{step.step}</span>
                </div>
                <h3 className="mt-4 text-base font-medium text-slate-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {remediationTiers.map((tier) => (
            <div key={tier.tier} className="glass-card rounded-xl p-6">
              <span className="text-sm font-medium text-amber-400">{tier.tier}</span>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{tier.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
