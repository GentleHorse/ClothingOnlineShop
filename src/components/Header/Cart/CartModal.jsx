import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart";

const CartModal = forwardRef(function CartModal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      id="modal"
      className="w-[30%] p-2 bg-stone-300 border-none rounded-md shadow-[0_0_10px_rgba(0,0,0,0.5)]"
    >
      <h2 className="text-2xl text-amber-600 uppercase m-0">{title}</h2>
      <Cart />
      <form
        method="dialog"
        className="mt-4 flex gap-4 justify-end items-center"
      >
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
