type Item = { label: string; status: string };

export function StatusCard({ title, items }: { title: string; items: Item[] }) {
  return (
    <section className="rounded-xl border border-[#333] bg-[#111] p-4">
      <h2 className="text-sm font-medium text-[#D4AF37] mb-3">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex justify-between text-sm">
            <span className="text-[#ccc]">{item.label}</span>
            <span
              className={
                item.status === "VALIDATED" || item.status === "OK"
                  ? "text-emerald-400"
                  : item.status === "VERIFICAR"
                  ? "text-amber-400"
                  : "text-[#666]"
              }
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
