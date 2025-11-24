import * as React from "react"

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["rounded-2xl border border-white/10 bg-white/5", className].join(" ")} {...props} />
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6 pb-3" {...props} />
}
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className="text-lg font-semibold" {...props} />
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-6 pt-0" {...props} />
}
