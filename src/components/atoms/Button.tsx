import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon-only";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all ease-out duration-normal",
        {
          "btn-primary": variant === "primary",
          "bg-transparent text-green-700 hover:bg-green-100/50 px-6 py-3 rounded-full": variant === "ghost",
          "bg-white text-green-700 border border-green-300 hover:bg-green-50 px-8 py-4 px-8 py-4 rounded-full shadow-sm hover:shadow-md": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
