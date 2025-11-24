import * as React from "react"
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={["w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50", className].join(" ")}
      {...props}
    />
  )
)
Input.displayName = "Input"
