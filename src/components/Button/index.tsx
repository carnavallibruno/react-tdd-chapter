interface ButtonProps {
  text: string;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button className="w-full text-[18px]" {...rest}>
      {text}
    </button>
  );
}
