import { ComponentProps } from "react";

import {
  Button as GluestackButton,
  ButtonSpinner,
  ButtonText,
} from "../../components/ui/button";

type Props = ComponentProps<typeof GluestackButton> & {
  label: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
  block?: boolean;
};

export function FGButton({
  label,
  isLoading = false,
  block = false,
  variant = "solid",
  ...rest
}: Props) {
  return (
    <GluestackButton
      variant={variant}
      className={`${block ? "w-full" : "w-fit"} items-center gap-3`}
      {...rest}
    >
      {isLoading && <ButtonSpinner color="white" />}
      <ButtonText className="text-primary-0">{label}</ButtonText>
    </GluestackButton>
  );
}
