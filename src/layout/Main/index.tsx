import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center h-full">{children}</main>
  );
};

export default Main;
