import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />

      {/* Header is fixed, so give top padding */}
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
