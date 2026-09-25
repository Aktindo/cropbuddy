import { Leaf } from "lucide-react";
import { footerInfo } from "@/data/domainData";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-500/10 py-14">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-emerald-400" />
              <span className="font-display text-base text-slate-200">CropBuddy</span>
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
              {footerInfo.problemStatement}
            </p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-slate-600">
              {footerInfo.psId}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-400">KVK partnerships</h4>
            <ul className="mt-3 space-y-1.5">
              {footerInfo.partners.map((p) => (
                <li key={p} className="text-xs text-slate-500">{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-400">Documentation</h4>
            <ul className="mt-3 space-y-1.5">
              <li className="text-xs text-slate-500">System architecture spec</li>
              <li className="text-xs text-slate-500">Model card & benchmarks</li>
              <li className="text-xs text-slate-500">Team credentials</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-emerald-500/10 pt-6 text-xs text-slate-600">
          Built for Smart India Hackathon. Not affiliated with a commercial agri-input brand.
        </div>
      </Container>
    </footer>
  );
}
