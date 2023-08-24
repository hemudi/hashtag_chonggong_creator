import Footer from "@layout/Footer";
import Header from "@layout/Header";
import Main from "@layout/Main";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-b from-secondary-100 to-primary-100">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
