import React from "react";
import { cn } from "../lib/utils";

export function Button({ children, className = "", size = "md", variant = "default", ...props }) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variantStyles = {
    default: "bg-black text-white hover:bg-neutral-800",
    outline: "border border-black text-black hover:bg-neutral-100",
  };

  return (
    <button
      className={cn(
        "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
