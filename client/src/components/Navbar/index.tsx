import React from "react";
import NavMenu from "./NavMenu";
import { Container, Wrapper, NavLogo } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavLogo>
          {/* <div>P L</div>
          <span>POLY</span> */}
          <img src="Poly.png" alt="" />
        </NavLogo>
        <NavMenu />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
