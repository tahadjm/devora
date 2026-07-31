import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("mx-auto w-full max-w-[1160px] px-6 md:px-16", className)}>
      {children}
    </div>
  );
}
