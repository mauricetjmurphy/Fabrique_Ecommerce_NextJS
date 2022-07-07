import * as React from "react";
import Footer from "../components/Footer/Footer";
import { UserNavigation } from "../components/Navigation";
import { SiteNavigation } from "../components/Navigation/SiteNavigation/SiteNavigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <UserNavigation />
      <SiteNavigation />
      <main className="min-h-[calc(100vh-272px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
