import Image from "next/image";

import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";

const BACKGROUND_IMAGE = "/assets/images/background_noah.jpg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col justify-start items-center min-h-screen">
      <Image className="-z-10 object-cover" src={BACKGROUND_IMAGE} alt="background image" fill />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
