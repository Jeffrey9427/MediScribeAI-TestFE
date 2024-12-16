import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
          variant === "default"
            ? "bg-primary text-white hover:bg-primary/90"
            : variant === "outline"
            ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            : "hover:bg-accent hover:text-accent-foreground"
        } ${
          size === "default"
            ? "h-12 px-4 py-4"
            : size === "sm"
            ? "h-9 rounded-md px-3"
            : "h-11 rounded-md px-8"
        } ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
