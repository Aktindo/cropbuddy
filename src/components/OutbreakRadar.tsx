import { Radar, MessageSquare, PhoneCall, Bell } from "lucide-react";
import { outbreakExamples, alertChannels } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const channelIcons = [Bell, MessageSquare, PhoneCall];

export default function OutbreakRadar() {
  return (
    <section id="radar" className="border-t border-emerald-500/10 py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            title="Every scan feeds the district-level picture"
            description="Individual diagnoses aggregate into a spatio-temporal graph, so an outbreak is visible while it is still a handful of scattered fields."
          />

          <div className="mt-8 space-y-3">
            {outbreakExamples.map((o) => (
              <div key={o.region} className="flex items-center justify-between rounded-lg border border-emerald-500/15 bg-slate-900/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Radar className="h-4 w-4 text-emerald-400" />
                  <div>
                    <span className="text-sm text-slate-200">{o.region} · {o.crop}</span>
                    <span className="block text-xs text-slate-500">{o.threat}</span>
                  </div>
                </div>
                <span className="text-xs text-amber-400">{o.trend}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-slate-100">Multi-channel alerting</h3>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed">
            An early warning is only useful if it reaches the farmer, including
            those without a smartphone.
          </p>
          <div className="mt-6 space-y-4">
            {alertChannels.map((c, i) => {
              const Icon = channelIcons[i];
              return (
                <div key={c.channel} className="glass-card flex gap-4 rounded-xl p-5">
                  <Icon className="h-5 w-5 shrink-0 text-amber-400" strokeWidth={1.75} />
                  <div>
                    <h4 className="text-sm font-medium text-slate-100">{c.channel}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{c.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
