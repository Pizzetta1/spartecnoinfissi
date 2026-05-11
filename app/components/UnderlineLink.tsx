"use client";

export default function UnderlineLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative group cursor-pointer">
      {children}

      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-500 ease-out group-hover:w-full"></span>
    </span>
  );
}