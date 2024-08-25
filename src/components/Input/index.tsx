import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 text-[18px]">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-12 px-3 rounded-xl ${className}`}
        data-testid={id + "-input"}
        {...rest}
      />
    </div>
  );
}
