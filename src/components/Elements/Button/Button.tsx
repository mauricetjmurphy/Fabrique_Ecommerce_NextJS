import * as React from "react";
import clsx from "clsx";

const variants = {
  primary:
    "bg-black border border-black rounded-none text-white hover:bg-white hover:text-black hover:border-black",
  inverse:
    "bg-white text-black rounded-none border border-black hover:bg-blue-600:text-white",
  danger: "bg-red-600 text-white hover:bg-red-50:text-red-600",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  text: string;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      className = "",
      variant = "primary",
      size = "md",
      text,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          "flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";
