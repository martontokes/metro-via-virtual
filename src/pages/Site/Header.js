import React from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ site }) {

  return (

    <>

      <div id="header">
        <Logo site={site} />

      </div>
      
    </>

  );

}
