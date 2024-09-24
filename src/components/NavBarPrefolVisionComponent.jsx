import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const navs = [
  { link: "FULL/3H_BTN_15+_null_null", name: "FULL" },
  { link: "3H/3H_BTN_15+_null_null", name: "3 HANDLE" },
  { link: "HU/HU_SB_15+_BB_null", name: "HEADS UP" },
];

const NavBarPrefolVisionComponent = () => {
  const [tabSelected, setTabSelected] = useState("FULL");
  return (
    <div className="flex flex-col w-full   min-h-screen max-w-screen-xl px-4">
      {/* encabezado tipo de juego */}
      <div role="tablist" className="tabs tabs-bordered ">
        {/* hacer para que se quede selecionada si esta activa */}
        {navs.map((nav) => (
          <NavLink
            onClick={() => setTabSelected(nav.name)}
            key={nav.name}
            to={nav.link}
            role="tab"
            className={`tab  ${
              tabSelected === nav.name
                ? "tab-active font-black tab-border-3 "
                : ""
            }`}
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default NavBarPrefolVisionComponent;
