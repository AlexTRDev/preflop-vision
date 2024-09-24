import { NavLink } from "react-router-dom";

const NavLinkCustomComponent = ({
  id,
  range,
  to,
  bgColor,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` text-center w-full ${
          isActive
            ? `rounded-none ${bgColor}`
            : `rounded-none ${hoverBgColor} ${hoverTextColor}`
        }`
      }
      key={id}
    >
      {range}
    </NavLink>
  );
};

export default NavLinkCustomComponent;
