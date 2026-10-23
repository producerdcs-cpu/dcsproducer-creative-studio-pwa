import { StatusCard } from "./components/StatusCard";
import { BrandFooter } from "./components/BrandFooter";
import { GateStatus } from "./pages/GateStatus";
import { BRAND } from "./lib/brand";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-graphite px-4 py-5">
        <h1 className="text-xl font-semibold tracking-wide text-gold">
          {BRAND.name}
        </h1>
        <p className="text-sm text-[#999] mt-1">
          Fase {BRAND.phase} · Uso Pessoal · {BRAND.gate} ativo
        </p>
      </header>

      <main className="flex-1 px-4 py-6 space-y-6 max-w-lg mx-auto w-full">
        <StatusCard
          title="Labs AEGIS (4/4 service layer)"
          items={[
            { label: "Lab 01 — Observability + RAG", status: "VALIDATED" },
            { label: "Lab 02 — DevSecOps Gate", status: "VALIDATED" },
            { label: "Lab 03 — Event-Driven Generative", status: "VALIDATED" },
            { label: "Lab 04 — Clean Arch + Containers", status: "VALIDATED" },
          ]}
        />

        <GateStatus />

        <div className="rounded-xl border border-graphite bg-[#111] p-4 text-sm text-[#ccc]">
          <p className="text-gold font-medium mb-2">Status consolidado</p>
          <p>
            Labs 01–04 VALIDATED · Tesseract privado · Evidence Pack Hackathon APROVADO
            (submission pública). Ícones prontos. Deploy na Vercel para HTTPS e instalação no celular.
          </p>
        </div>
      </main>

      <BrandFooter />
    </div>
  );
}
