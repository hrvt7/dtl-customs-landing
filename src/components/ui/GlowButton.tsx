"use client";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
}

export function GlowButton({
  children,
  href,
  onClick,
  size = "md",
  variant = "primary",
  className = "",
  type = "button",
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base md:px-8 md:py-3.5",
    lg: "px-8 py-3.5 text-base md:px-10 md:py-4 md:text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-dtl-blue to-dtl-accent text-white hover:shadow-[0_0_30px_rgba(30,144,255,0.5)] active:scale-95",
    secondary:
      "bg-transparent border border-dtl-blue/40 text-dtl-blue hover:bg-dtl-blue/10 hover:border-dtl-blue hover:shadow-[0_0_20px_rgba(30,144,255,0.2)]",
  };

  const base = `relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={base} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
