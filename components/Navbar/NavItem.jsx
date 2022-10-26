import Link from 'next/link'
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
  color: ${props => props.active ? "#F8893C" : "#4D4D4D"};
`

const Para = styled.p`
  margin: 0;
  font-size: 0.8em;
  font-family: sans-serif;
`

const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: ${props => props.active ? "#F8893C" : "4D"};
`

export const NavItem = ({
  label,
  active,
  handleSelectPage,
  ...props
}) => {
  return (
    <Link href={label === "Home" ? "/" : `/${label.toLowerCase()}`}>
      <Anchor active={active} {...props}>
        {label === "Home" && <Home width="2em" height="2em" />}
        {label === "Explore" && <Compass width="2em" height="2em" />}
        {label === "Contribute" && <Donate width="2em" height="2em" />}
        {label === "Profile" && <User width="2em" height="2em" />}
        <Para>{label}</Para>
      </Anchor>
    </Link>
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
