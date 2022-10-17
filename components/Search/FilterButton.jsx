import styled from "styled-components"
import PropTypes from "prop-types"
import { useState } from "react"

import { Filter as FilterIcon } from "react-feather"

const MyFilterButton = styled.button`
  box-sizing: border-box;
  border-radius: 0 2em 2em 0;
  font-size: 1.2em;
  height: 2em;
  padding: 0.5em 0.75em 0.5em 0.5em;
  border: 0;
  box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.25);
  color: ${props => props.color};
  background-color: white;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    left: 0;
    width: 1px;
    height: 60%;
    background: lightgray;
  }
`

export const FilterButton = ({
  label,
  active,
  ...props
}) => {
  const color = active ? "#F8893C" : "darkgray"
  
  return (
    <MyFilterButton color={color} {...props}>
      <FilterIcon />
    </MyFilterButton>
  )
}

FilterButton.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool
}

FilterButton.defaultProps = {
  label: 'Arts',
  active: false
}
