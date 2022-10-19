import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { themeActions } from "../../store/shopping-cart/themeSlice";

import "../../styles/theme.css";

const Theme = () => {
  const [dark, setDark] = useState();

  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeActions.toggle());
    localStorage.setItem("theme", !dark);
    setDark(!dark);
  };

  return (
    <div className="toggle-switch">
      {dark ? (
        <div className="sun__icon" onClick={toggleTheme}>
          <i className="ri-sun-line"></i>
        </div>
      ) : (
        <div className="moon__icon" onClick={toggleTheme}>
          <i className="ri-moon-fill"></i>
        </div>
      )}
    </div>
  );
};

export default Theme;
