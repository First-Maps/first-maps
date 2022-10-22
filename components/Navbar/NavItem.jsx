import styled from "styled-components"
import PropTypes from "prop-types"

import { Home, Compass, Donate, User } from "iconoir-react"

const MyNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: ${props => props.active ? "#F8893C" : "4D"};
`

const Para = styled.p`
  margin: 0;
  font-size: 0.8em;
  font-family: sans-serif;
`

export const NavItem = ({
  label,
  active,
  handleSelectPage,
  ...props
}) => {
  function handleClick() {
    handleSelectPage(label)
  }

  return (
    <MyNavItem active={active} onClick={handleClick} {...props}>
      {label === "Home" && <Home width="2em" height="2em" />}
      {label === "Explore" && <Compass width="2em" height="2em" />}
      {label === "Contribute" && <Donate width="2em" height="2em" />}
      {label === "Profile" && <User width="2em" height="2em" />}
      <Para>{label}</Para>
    </MyNavItem>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
  handleSelectPage: PropTypes.func
}

NavItem.defaultProps = {
  label: '',
  active: false
}
