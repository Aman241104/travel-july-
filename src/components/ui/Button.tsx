import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ember-600 text-sand hover:bg-ember-400 focus-visible:outline-ember-600",
  outline:
    "border border-ink/15 text-ink hover:border-ember-600 hover:text-ember-600 focus-visible:outline-ember-600",
  "outline-dark":
    "border border-sand/25 text-sand hover:border-ember-400 hover:text-ember-400 focus-visible:outline-sand",
  ghost: "text-sand/90 hover:text-ember-400 focus-visible:outline-sand",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
