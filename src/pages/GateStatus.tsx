import { StatusCard } from "../components/StatusCard";

export function GateStatus() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gold">Gate AEGIS Pre-Send</h2>
      <StatusCard
        title="Segurança (Pilar 08)"
        items={[
          { label: "Repositórios de núcleo Private", status: "OK" },
          { label: "Secrets locais (sandbox)", status: "OK" },
          { label: "Secret scanning GitHub", status: "EM ANDAMENTO" },
          { label: "Lab 02 Security Gate", status: "VALIDATED" },
          { label: "Tesseract (privado)", status: "OK" },
        ]}
      />
      <StatusCard
        title="Observability + Labs"
        items={[
          { label: "Lab 01 Observability + RAG", status: "VALIDATED" },
          { label: "Labs 03 e 04 (service layer)", status: "VALIDATED" },
          { label: "Ponte Tesseract nos 4", status: "OK" },
          { label: "Registry production_ready (serviço)", status: "OK" },
        ]}
      />
      <StatusCard
        title="Fase 1 — Creative Studio"
        items={[
          { label: "Definition of Done", status: "OK" },
          { label: "Scaffold PWA", status: "OK" },
          { label: "Evidence Pack", status: "OK" },
          { label: "Deploy público", status: "OK" },
          { label: "Ícones 192/512", status: "OK" },
        ]}
      />
    </div>
  );
}
