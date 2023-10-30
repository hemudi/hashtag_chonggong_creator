import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      <Image className="-z-10 object-cover" src="/assets/images/background.jpg" alt="background image" fill />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
