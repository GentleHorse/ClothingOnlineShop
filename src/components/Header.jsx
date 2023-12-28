import LogoImage from "/logo.png";

import Button from "./utils/Button.jsx";

export default function Header() {
  return (
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
        <Button>Shopping Cart</Button>
      </p>
    </header>
  );
}
