import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "./variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
