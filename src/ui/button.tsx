import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "secondary"
  size?: "sm" | "default" | "lg" | "icon"
}

const cn = (...c: (string | undefined | false)[]) =>
  c.filter(Boolean).join(" ")

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    const base =
      "inline-flex items-center justify-center text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"

    // Size variants
    const sizes = {
      sm: "h-9 px-3",
      default: "h-10 px-4",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
    }

    // Variant styles
    const variants =
      variant === "secondary"
        ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
        : "bg-[#FF6A13] hover:opacity-90 text-white"

    return (
      <Comp
        ref={ref as any}
        className={cn(base, sizes[size], variants, className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"