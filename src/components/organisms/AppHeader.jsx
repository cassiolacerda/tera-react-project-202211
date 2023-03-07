import React from "react";
import { Link } from "react-router-dom";

import styles from "./AppHeader.module.css";

import logo from "../../images/logo.svg";

export default function AppHeader(props) {
  return (
    <div className={styles.appHeader}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} className="responsive" alt="" />
        </Link>
      </div>
      <div className={styles.menu}>
        <i onClick={() => props.setOpen(true)} className="fa fa-bars"></i>
      </div>
    </div>
  );
}
