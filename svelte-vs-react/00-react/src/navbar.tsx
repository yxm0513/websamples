import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.styles.module.css";

export const NavBar = () => {
  return (
    <nav>
      <Link className={classes.link} to="/">
        00 Hello world
      </Link>
      <Link className={classes.link} to="/01-dom-update">
        01 DOM Update
      </Link>
      <Link className={classes.link} to="/02-handling-css">
        02 HandlingCSS
      </Link>
      <Link className={classes.link} to="/03-reactive-code">
        03 Reactive Code
      </Link>
      <Link className={classes.link} to="/04-life-cycle">
        04 Life Cycle
      </Link>
      <Link className={classes.link} to="/05-async-callback">
        05 Async Closure
      </Link>
      <Link className={classes.link} to="/06-conditional-rendering">
        06 Conditional Rendering
      </Link>
      <Link className={classes.link} to="/07-common-data">
        07/08 Common Data + Context
      </Link>
      <Link className={classes.link} to="/08-data-load">
        08 Data Load
      </Link>
      <Link className={classes.link} to="/09-web-components">
        09 Web Components
      </Link>
    </nav>
  );
};
