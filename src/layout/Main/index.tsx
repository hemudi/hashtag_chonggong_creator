import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-full relative z-10">{children}</main>
    </>
  );
};

export default Main;
