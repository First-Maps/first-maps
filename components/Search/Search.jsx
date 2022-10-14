import styled from "styled-components"
import PropTypes from "prop-types"

// these icons could be useful
import { Search as SearchIcon } from "react-feather"

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;  
  border: 1px solid #777;
  width: 80vw;
  border-radius: 1em;
  height: 2em;
  font-size: 1em;
  padding: 0.5em 1em;
  margin: 1em;
  @media (min-width: 768px) {
    width: 20em;
  }
`

export const Search = ({
  placeholder,
  ...props
}) => {
  return (
    <SearchInput
      placeholder={placeholder}
      {...props}
    />
  )
}

Search.propTypes = {
  placeholder: PropTypes.string
}

Search.defaultProps = {
  placeholder: "Search"
}