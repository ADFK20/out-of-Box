import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";
export default function LayOut() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
