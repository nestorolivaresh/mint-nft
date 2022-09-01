import { ButtonComponent } from "./Button.styles";
import { ButtonProps } from "./types";

export function Button({
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  
  return (
    <ButtonComponent
      className={className}
      disabled={disabled}
      {...rest}
    >
      {children}
    </ButtonComponent>
  );
}
