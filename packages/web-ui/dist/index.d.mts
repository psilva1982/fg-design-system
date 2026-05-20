import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';

declare const buttonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
};

declare function Button({ className, variant, size, asChild, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps };
