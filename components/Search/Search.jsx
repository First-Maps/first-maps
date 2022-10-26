import styled from "styled-components"
import PropTypes from "prop-types"

// these icons could be useful
import { Search as SearchIcon } from "react-feather"

// add partial border on the right side of the input
const SearchInput = styled.input`
  box-sizing: border-box;
  width: 80vw;
  border-radius: 2em 0 0 2em;
  height: 2em;
  font-size: 1.2em;
  padding: 0.5em 1em;
  border: 0;
  box-shadow: 2px 4px 0 rgba(0, 0, 0, 0.25);
  font-weight: 300;
  @media (min-width: 768px) {
    width: 16em;
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