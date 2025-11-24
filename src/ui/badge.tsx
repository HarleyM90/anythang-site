import * as React from "react"

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={["inline-flex items-center px-2 py-1 rounded-md text-xs border", className].join(" ")}
      {...props}
    >
      {children}
    </span>
  )
}
