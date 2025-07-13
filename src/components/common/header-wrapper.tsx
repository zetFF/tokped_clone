import React from "react";
import CartPopover from "../features/cart/CartPopover";
import Notification from "./notification";
import Mail from "./email/mail";

function HeaderWrapper() {
  return (
    <>
      <div className="flex items-center gap-3 sm:gap-6 px-2 sm:px-5">
        <CartPopover />
        <Notification />
        <Mail />
      </div>
    </>
  );
}

export default HeaderWrapper;
