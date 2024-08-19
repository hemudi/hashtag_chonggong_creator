import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col justify-start items-center min-w-fit min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/assets/images/background.png')]">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
