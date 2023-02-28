import React from "react";

import logo from "../../images/logo.svg";

export default function AppHeader(props) {
  return (
    <div className="app-header">
      <div className="app-header__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <div className="app-header__menu">
        <i onClick={() => props.setOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}
