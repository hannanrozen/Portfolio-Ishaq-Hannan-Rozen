// components/ui/Button.jsx
import { forwardRef } from "react";
import { clsx } from "clsx";

const Button = forwardRef(
  (
    { variant = "primary", size = "md", children, className, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300";

    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105",
      secondary:
        "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white",
      ghost: "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
