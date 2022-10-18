import styled from "styled-components";
import PropTypes from "prop-types";

import { NavItem } from "./NavItem";

import { Home, Compass, Donate, User } from "iconoir-react";

// make NavContainer absolute positioned on larger screens
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  min-width: 100%;

  @media (min-width: 768px) {
    justify-content: left;
    position: absolute;
    z-index: 999;
    bottom: 0;
    left: 0;
  }
`;

const MyNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  width: 100%;
  margin: 0;
  padding: 0.5em 0 0.5em 0;
  background-color: white;

  @media (min-width: 768px) {
    width: 400px;
    align-self: flex-end;
    border-radius: 1em 1em 0 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2B2A33;
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
