/**
 * Template se ponovo montira pri svakoj navigaciji,
 * pa svaka stranica dobija blagi "fade up" ulaz.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-[fade-up_0.5s_var(--ease-out-expo)_both]">{children}</div>;
}
