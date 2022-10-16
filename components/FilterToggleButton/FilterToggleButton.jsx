import styled from "styled-components"
import PropTypes from "prop-types"
import { useState } from "react"

const MyFilterToggleButton = styled.button`
  box-sizing: border-box;
  border-radius: 2em;
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.4em 0.7em;
  border: 0;
  background-image: ${props => props.background};
  color: white;
  min-width: 4em;
`

export const FilterToggleButton = ({
  label,
  selected,
  ...props
}) => {
  const background = selected ? 
    'linear-gradient(to right, #F8893C 0%, #FF5929 100%)'
    :
    'linear-gradient(to right, #878787 0%, #333333 100%)'
  
  return (
    <MyFilterToggleButton background={background} {...props}>
      {label}
    </MyFilterToggleButton>
  )
} 

FilterToggleButton.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.bool
}

FilterToggleButton.defaultProps = {
  label: '',
  selected: false
}