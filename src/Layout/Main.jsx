import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooterShown = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      { noHeaderFooterShown || <Navbar /> }
      <Outlet />
      { noHeaderFooterShown || <Footer /> }
    </div>
  );
};

export default Main;
