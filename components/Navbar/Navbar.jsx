import styled from "styled-components";
import PropTypes from "prop-types";

import { NavItem } from "./NavItem";

// make NavContainer absolute positioned on larger screens
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  min-width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: left;
    position: absolute;
    z-index: 999;
    bottom: 0;
    left: 0;
  }
`

const MyNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 60px;
  width: 100%;
  margin: 0;
  padding: 0.5em 0 0.5em 0;
  background-color: white;

  @media (min-width: 768px) {
    width: 400px;
    align-self: center;
    border-radius: 0 1em 0 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2B2A33;
  }
`

export const Navbar = ({
  handleSelectPage,
  navPages,
  activePage,
  ...props 
}) => {
  return (
    <NavContainer>
      <MyNavbar>
        {navPages.map((pageName) => (
          <NavItem
            key={pageName}
            label={pageName}
            active={pageName === activePage}
            handleSelectPage={handleSelectPage}
          />
        ))}
      </MyNavbar>
    </NavContainer>
  )
}

Navbar.propTypes = {
  handleSelectPage: PropTypes.func,
  navPages: PropTypes.arrayOf(
    PropTypes.string
  ),
  activePage: PropTypes.string,
}

Navbar.defaultProps = {
  navPages: [],
  activePage: ""
}
