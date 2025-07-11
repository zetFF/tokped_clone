import React from "react";
import CartPopover from "../../features/cart/components/CartPopover";
import Notification from "./notification";
import Mail from "./email/mail";

function HeaderWrapper() {
  return (
    <>
      <div className="flex items-center gap-6 px-5">
        <CartPopover />
        <Notification />
        <Mail />
      </div>
    </>
  );
}

export default HeaderWrapper;
