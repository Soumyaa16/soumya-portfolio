import Link from "next/link";
import React from "react";

interface ContactButtonProps {
  href: string;
  text?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  text = "let's go!",
}) => {
  return (
    <Link
      href={href}
      className="flex w-fit h-fit bg-accent rounded-[40px] justify-between items-center border-none cursor-pointer group"
    >
      <span className="flex-1 flex pl-6 pr-2 items-center justify-center text-white text-[1.1em] tracking-[1.2px]">
        {text}
      </span>

      <span className="w-[45px] h-[45px] bg-[#FF9A00] flex items-center justify-center rounded-full border-[3px] border-[#1d2129]">
      <svg
        className="transition-transform duration-300 group-hover:translate-x-1 opacity-70 group-hover:opacity-100"
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill="black" />
          <circle cx="5.73583" cy="1.61321" r="1.5" fill="black" />
          <circle cx="5.73583" cy="5.5566" r="1.5" fill="black" />
          <circle cx="9.85851" cy="5.5566" r="1.5" fill="black" />
          <circle cx="9.85851" cy="9.5" r="1.5" fill="black" />
          <circle cx="13.9811" cy="9.5" r="1.5" fill="black" />
          <circle cx="5.73583" cy="13.4434" r="1.5" fill="black" />
          <circle cx="9.85851" cy="13.4434" r="1.5" fill="black" />
          <circle cx="1.61321" cy="17.3868" r="1.5" fill="black" />
          <circle cx="5.73583" cy="17.3868" r="1.5" fill="black" />
        </svg>
      </span>
    </Link>
  );
};

export default ContactButton;
