import styled from "styled-components"
import PropTypes from "prop-types"

const MyNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  color: ${props => props.color};
`

const Para = styled.p`
  margin: 0;
  font-size: 0.8em;
  font-family: sans-serif;
`

export const NavItem = ({
  label,
  active,
  children,
  ...props
}) => {
  const color = active ? "#F8893C" : "#4D4D4D"
  
  return (
    <MyNavItem color={color} {...props}>
      {children}
      <Para>{label}</Para>
    </MyNavItem>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool
}

NavItem.defaultProps = {
  label: '',
  active: false
}
