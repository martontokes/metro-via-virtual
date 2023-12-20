import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Header({ site }) {

  return (

    <>
      <div id="header">
        <div id="Logo">
          <Logo site={site} />
        </div>
        <Menu />
      </div>
    </>

  );

}
