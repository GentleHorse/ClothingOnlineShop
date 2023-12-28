import { useRef } from "react";

import LogoImage from "/logo.png";
import Button from "../utils/Button.jsx";
import CartModal from "./Cart/CartModal.jsx";

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();

  const cartQuantity = cart.items.length;

  const openCartHandler = () => {
    modal.current.open();
  };

  let modalActions = (
    <button className="bg-transparent border-none rounded text-stone-800 hover:text-stone-600 cursor-pointer text-lg">
      Close
    </button>
  );
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button className="bg-transparent border-none rounded text-stone-800 hover:text-stone-600 cursor-pointer text-lg">
          Close
        </button>
        <button className="bg-amber-950 hover:bg-amber-800 text-stone-200 border-none rounded py-2 px-4 cursor-pointer">
          Checkout
        </button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={cart.items}
        title="Your Cart"
        actions={modalActions}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
      />

      <header className="flex justify-between items-center py-12 px-[15%]">
        <div className="flex items-center">
          <img
            className="w-20 mr-6"
            src={LogoImage}
            alt="woman with red frame sunglass"
          />
          <h1 className="m-0 text-center uppercase text-amber-400 drop-shadow-sm text-[2.5rem]">
            Elegant context
          </h1>
        </div>
        <p>
          <Button onClick={openCartHandler}>Cart ({cartQuantity})</Button>
        </p>
      </header>
    </>
  );
}
