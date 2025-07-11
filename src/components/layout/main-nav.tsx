import React from "react";
import TopNav from "./nav/TopNav";
import Navbar from "./nav/Navbar";

function MainNav() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <TopNav />
        <Navbar />
      </div>
    </>
  );
}

export default MainNav;
