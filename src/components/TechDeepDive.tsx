import { Scissors, Minimize2, Shuffle } from "lucide-react";
import { techDeepDive } from "@/data/domainData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [Scissors, Minimize2, Shuffle];

export default function TechDeepDive() {
  return (
    <section className="border-t border-emerald-500/10 bg-slate-900/20 py-24">
      <Container>
        <SectionHeading
          title="140MB down to under 12.8MB, without giving up accuracy"
          description="Three engineering passes make a transformer-class model small enough to live on a $50 Android device."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {techDeepDive.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="glass-card rounded-xl p-6">
                <Icon className="h-5 w-5 text-emerald-400" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-medium text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
