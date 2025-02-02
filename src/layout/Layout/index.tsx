"use client";

import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-center min-w-fit min-h-screen bg-gradient-to-b from-secondary-500 via-secondary-500 to-primary-300">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
