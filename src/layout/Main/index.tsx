import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return <main className="flex items-center justify-center h-full w-80 sm:w-fit fold:w-96">{children}</main>;
};

export default Main;
