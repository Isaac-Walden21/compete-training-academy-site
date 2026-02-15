import { cn } from "@/lib/utils";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  error?: string;
}

export function RadioGroup({ name, options, selected, onChange, error }: RadioGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-sm font-medium text-navy">Pricing Options (required)</legend>
      {options.map((option) => {
        const active = selected === option.value;

        return (
          <label
            key={option.value}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm text-navy transition",
              active ? "border-gold bg-gold/10" : "border-navy/25 hover:border-gold/70"
            )}
          >
            <span className="grid h-5 w-5 place-content-center rounded-full border border-navy/40">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={active}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span className={cn("h-2.5 w-2.5 rounded-full", active ? "bg-gold" : "bg-transparent")} />
            </span>
            <span>{option.label}</span>
          </label>
        );
      })}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </fieldset>
  );
}
