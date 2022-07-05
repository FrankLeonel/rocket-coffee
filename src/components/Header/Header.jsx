import { useState } from "react";
import LogoDesktop from "../../assets/icons/logo-desktop.svg?component";
import LogoMobile from "../../assets/icons/logo-mobile.svg?component";
import MenuClose from "../../assets/icons/menu-buguer-close.svg?component";
import MenuOpen from "../../assets/icons/menu-buguer-open.svg?component";
import Menu from "./Menu/Menu";

const Header = () => {
  const [show, setShow] = useState(false);
  const items = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Menu",
      path: "#",
    },
    {
      name: "Recompensas",
      path: "#",
    },
    {
      name: "GiftCards",
      path: "#",
    },
    {
      name: "Lojas",
      path: "#",
    },
  ];

  return (
    <header className="w-full pt-9 md:pt-12 pb-6 lg:pb-0 px-6 lg:px-40 flex items-center justify-between border-b border-gray-800 lg:border-b-0">
      <LogoDesktop className="hidden lg:block" />
      <LogoMobile className="bloxk lg:hidden" />

      <Menu items={items} />

      <button
        className="cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setShow(!show)}
      >
        {!show ? <MenuOpen /> : <MenuClose />}
      </button>

      <button className="hidden lg:block rounded-md border border-violet-500 py-3 px-10 font-extrabold text-xs uppercase focus:outline-none hover:bg-violet-500 hover:text-gray-200 transition-colors">
        Pegar meu café
      </button>
    </header>
  );
};

export default Header;
