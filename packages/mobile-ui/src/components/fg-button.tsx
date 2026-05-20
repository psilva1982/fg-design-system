import { ComponentProps, ReactNode } from "react";

import {
  Button as GluestackButton,
  ButtonSpinner,
  ButtonText,
} from "../../components/ui/button";

type Props = ComponentProps<typeof GluestackButton> & {
  children?: ReactNode;
  label?: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
  block?: boolean;
};

export function FGButton({
  children,
  label,
  isLoading = false,
  block = false,
  variant = "solid",
  ...rest
}: Props) {
  const content = children ?? label;

  return (
    <GluestackButton
      variant={variant}
      className={`${block ? "w-full" : "w-fit"} items-center gap-3`}
      {...rest}
    >
      {isLoading && <ButtonSpinner color="white" />}
      {typeof content === "string" || typeof content === "number" ? (
        <ButtonText className="text-primary-0">{content}</ButtonText>
      ) : (
        content
      )}
    </GluestackButton>
  );
}
