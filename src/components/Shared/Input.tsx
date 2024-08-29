import clsx from "clsx";

export type inputProps = {
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  name: string;
  isRequired?: boolean;
  value?: string;
  type?: string;
  inputStyles?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  placeholder,
  name,
  disabled = false,
  onChange,
  onBlur,
  value,
  type,
  error,
  inputStyles,
}: inputProps) => {
  const styles = clsx(
    "bg-transparent font-houschka font-bold text-white border-b border-white placeholder:text-white/60 tracking-[0.02em] text-base md:text-[28px] pb-4 hover:border-primary focus:border-primary duration-300 transition-all focus:outline-none outline-none focus:ring-0",
    disabled ? "opacity-50" : ""
  );

  return (
    <div className={`${className}`}>
        <input
          type={type || 'text'}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className={`${styles} ${inputStyles}  `}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          min={0}
        />
      {error && <span className="text-red-500 md:mt-2 mt-1.5 sm:text-base text-xs font-medium">{error}</span>}
    </div>
  );
};

export default Input;
