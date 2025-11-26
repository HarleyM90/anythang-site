import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "secondary"
  size?: "sm" | "md" | "lg"
}

const cn = (...c: (string | undefined | false)[]) =>
  c.filter(Boolean).join(" ")

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    const base =
      "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50"

    const sizeClasses =
      size === "sm"
        ? "px-2 py-1 text-sm"
        : size === "lg"
        ? "px-6 py-3 text-lg"
        : "px-4 py-2 text-base"

    const styles =
      variant === "secondary"
        ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
        : "bg-[#FF6A13] hover:opacity-90 text-white"

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(base, sizeClasses, styles, className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"