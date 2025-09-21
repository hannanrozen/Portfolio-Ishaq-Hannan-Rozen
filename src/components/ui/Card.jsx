import { forwardRef } from "react";
import { clsx } from "clsx";

const Card = forwardRef(
  ({ children, className, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white rounded-2xl shadow-lg",
          hover &&
            "hover:shadow-2xl hover:scale-105 transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardContent = ({ children, className, ...props }) => (
  <div className={clsx("p-6", className)} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={clsx("p-6 pb-3", className)} {...props}>
    {children}
  </div>
);

export { Card, CardContent, CardHeader };
