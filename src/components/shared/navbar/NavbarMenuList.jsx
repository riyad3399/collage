import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const NavbarMenuList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-between border-t border-red-400">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`dropdown ${
                item.dropdownItems ? "dropdown-hover" : "drop-shadow-none"
              } text-white p-2 border-l border-red-400`}
            >
              <Link className="text-base flex ">
                {item.name}
                {item.dropdownItems && <RiArrowDropDownLine size={24} />}
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content z-10 menu menu-lg shadow bg-red-700 w-52"
              >
                {item.dropdownItems &&
                  item.dropdownItems.map((dropdown, i) => (
                    <Link
                      className="border-b border-red-400 text-base p-[6px]"
                      key={i}
                      to={dropdown.path}
                    >
                      {dropdown.name}
                    </Link>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="bg-red-700 p-4">
            {menuItems.map((item, i) => (
              <div key={i}>
                <Link className="text-base flex text-white">
                  {item.name}
                  {item.dropdownItems && <RiArrowDropDownLine size={24} />}
                </Link>
                <ul
                  tabIndex={0}
                  className="menu menu-dropdown-show bg-red-700 sm:hidden"
                >
                  {item.dropdownItems &&
                    item.dropdownItems.map((dropdown, i) => (
                      <Link
                        className="border-b border-red-400 text-white p-[6px]"
                        key={i}
                        to={dropdown.path}
                      >
                        {dropdown.name}
                      </Link>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMenuList;
