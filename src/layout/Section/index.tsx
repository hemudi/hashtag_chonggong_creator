import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: ReactNode;
  children: ReactNode;
}

const Section = ({ title, description = "", children }: SectionProps) => {
  return (
    <section className="flex flex-col items-start justify-center p-2.5 w-full h-fit">
      <h2 className="w-full text-sm sm:text-lg">{title}</h2>
      <p className="w-full text-xs sm:text-sm text-gray whitespace-pre-line leading-5 pt-1 pb-2.5">
        {description}
      </p>
      {children}
    </section>
  );
};

export default Section;
