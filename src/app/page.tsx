import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import DiagnosticShowcase from "@/components/DiagnosticShowcase";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import IPMFormulation from "@/components/IPMFormulation";
import OutbreakRadar from "@/components/OutbreakRadar";
import TechDeepDive from "@/components/TechDeepDive";
import BusinessModel from "@/components/BusinessModel";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><ComparisonTable /></ScrollReveal>
      <ScrollReveal><DiagnosticShowcase /></ScrollReveal>
      <ScrollReveal><ArchitectureDiagram /></ScrollReveal>
      <ScrollReveal><IPMFormulation /></ScrollReveal>
      <ScrollReveal><OutbreakRadar /></ScrollReveal>
      <ScrollReveal><TechDeepDive /></ScrollReveal>
      <ScrollReveal><BusinessModel /></ScrollReveal>
      <ScrollReveal><Footer /></ScrollReveal>
    </main>
  );
}
