import React, { useState } from "react";
import { academyDropdown } from "./NavItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className="w-52 absolute xl:top-36"
        onClick={() => setDropdown(!dropdown)}
      >
        {academyDropdown.map((item) => {
          return (
            <li key={item.id} className="cursor-pointer pb-1">
              <Link
                to={item.path}
                className={`block font-cor py-2 ${
                  item.cName || ""
                }`}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
