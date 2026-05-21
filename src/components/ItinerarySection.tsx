import { theme } from "@/lib/theme";

type Props = {
  title: string;
  items: string[];
};

export default function ItinerarySection({ title, items }: Props) {
  return (
    <div
      className="rounded-2xl border p-5"
      style={{
        backgroundColor: theme.surfaceSoft,
        borderColor: theme.border
      }}
    >
      <h3
        className="mb-3 text-base font-semibold"
        style={{ color: theme.textPrimary }}
      >
        {title}
      </h3>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}-${item}`}
            className="flex items-start gap-3 leading-7"
            style={{ color: theme.textSecondary }}
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
