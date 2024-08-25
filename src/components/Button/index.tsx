interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} data-testid={"button"} {...rest}>
      {children}
    </button>
  );
}
