type MetricProps = {
  value: string;
  label: string;
};
export default function Metric({ value, label }: MetricProps) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-gray-200">
      <div className="text-2xl font-extrabold tracking-tight text-primary">{value}</div>
      <div className="mt-1 text-sm font-medium text-secondary">{label}</div>
    </div>
  );
}
