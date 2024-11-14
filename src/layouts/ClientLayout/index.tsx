import { ReactNode } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserProvider } from "../../components/shared/UserContext";
const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </UserProvider>
    </>
  );
};

export default ClientLayout;
