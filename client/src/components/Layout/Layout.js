import React, { useState } from "react";
import Home from "../../Pages/Home/Home";
import { AiOutlineMenu, AiOutlineAlignCenter } from "react-icons/ai";
import "./layout.css";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change Toggle
  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handelToggle}>
              {toggle ? (
                <AiOutlineAlignCenter size={"30px"} />
              ) : (
                <AiOutlineMenu size={"30px"} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
