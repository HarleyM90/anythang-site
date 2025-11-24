import * as React from "react"
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={["w-full rounded-md px-3 py-2 bg-white/10 border border-white/20 text-white placeholder:text-white/50 min-h-[120px]", className].join(" ")}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"
