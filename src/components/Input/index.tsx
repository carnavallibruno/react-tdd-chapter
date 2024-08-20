interface InputProps {
  label: string;
  className?: string;
}

export default function Input({ label, className, ...rest }: InputProps) {
  return (
    <div className="flex flex-col gap-2 text-[18px]">
      <label htmlFor={label} className={""}>
        {label}
      </label>
      <input
        id={label}
        className={`w-full h-12 px-3 rounded-xl ${className}`}
        {...rest}
      />
    </div>
  );
}
