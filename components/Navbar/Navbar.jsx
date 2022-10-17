import styled from "styled-components";
import PropTypes from "prop-types";

import { NavItem } from "./NavItem";

import { Home, Compass, Donate, User } from "iconoir-react";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  min-width: 100%;
`;

const MyNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  margin: 0;
  background-color: white;
  @media (min-width: 768px) {
    width: 450px;
    justify-content: space-around;
  }
`;

export const Navbar = ({ ...props }) => {
  return (
    <NavContainer {...props}>
      <MyNavbar {...props}>
        <NavItem label="Home" active={true}>
          <Home width="2em" height="2em" />
        </NavItem>

        <NavItem label="Explore" active={false}>
          <Compass width="2em" height="2em" />
        </NavItem>

        <NavItem label="Contribute" active={false}>
          <Donate width="2em" height="2em" />
        </NavItem>

        <NavItem label="Profile" active={false}>
          <User width="2em" height="2em" />
        </NavItem>
      </MyNavbar>
    </NavContainer>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};
