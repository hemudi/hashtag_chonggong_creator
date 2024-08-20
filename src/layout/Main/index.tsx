import Image from "next/image";
import { ReactNode } from "react";

const IMAGE_URL = "/assets/images/cd.png";
const YOUTUBE_HREF = "https://youtu.be/EYG4ROejmyI?si=wbH9N7ppO4C-ZmWf";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="flex items-center justify-center h-full relative z-10">
        {children}
        <a
          className="absolute right-0 top-0 -z-10 animate-spin w-fit h-fit hidden sm:block"
          href={YOUTUBE_HREF}
          target="_blank"
        >
          <Image width="300" height="300" alt="plave pum" src={IMAGE_URL} priority />
        </a>
      </main>
    </>
  );
};

export default Main;
