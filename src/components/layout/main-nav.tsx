import React from "react";
import TopNav from "./nav/TopNav";
import Navbar from "./nav/navbar";

function MainNav() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white">
        <div className="hidden sm:block">
          <TopNav />
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default MainNav;
