"use client";
import Image from "next/image";
import { cn } from "~/lib/utils";

type FooterProps = {
  mode?: "inline" | "absolute";
  className?: string;
};

const Footer = ({ mode = "inline", className }: FooterProps) => {
  const content = (
    <div className={cn("flex items-center gap-3 opacity-90 flex-col sm:flex-row", className)}>
      <span className="text-sm">
        Built for the <strong>Ottawa Hackathon 3.0</strong>
      </span>
      <span className="hidden sm:block">|</span>
      <span className="text-sm">
        Powered by the <strong>Solace Agent Mesh</strong>
      </span>
      <Image
        src="/solace-logo.png"
        alt="Solace logo"
        width={256}
        height={256}
        className="mt-6 sm:mt-0 size-[96px] sm:size-[44px]"
      />
    </div>
  );

  if (mode === "absolute") {
    return (
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        {content}
      </div>
    );
  }

  return <div className="mt-8 flex justify-center">{content}</div>;
};

export default Footer;
