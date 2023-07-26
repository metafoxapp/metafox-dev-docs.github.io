const classNames: Record<string, string> = {
  h1: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100",
  p: "nx-mt-6 nx-leading-7 first:nx-mt-0",
  h2: "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
  body1: "nx-absolute -nx-mt-20",
  h3: "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-8 nx-text-2xl",
};

const Variants: Record<string, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "div",
  body2: "span",
  subtitle1: "div",
  subtitle2: "div",
};
export default function Typography({
  children,
  component,
  variant = "body1",
}: {
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle"
    | "subtitle2"
    | string;
}) {
  const C = (component ?? Variants[variant] ?? "div") as unknown as any;

  return <C className={classNames[variant]}>{children}</C>;
}
