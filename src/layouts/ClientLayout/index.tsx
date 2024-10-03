import { ReactNode } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
