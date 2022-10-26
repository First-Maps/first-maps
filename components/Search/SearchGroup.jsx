import styled from "styled-components"
import PropTypes from "prop-types"

import { Search } from "./Search"
import { FilterButton } from "./FilterButton"
import { FilterToggleButton } from "./FilterToggleButton"

// put SearchGroupContainer above all other components on the page
const SearchGroupContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }
`

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  box-sizing: border-box;
  padding: 1em 1em 0.5em 1em;
`

const SearchToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0 1em 0 0;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SearchGroup = ({
  filterToggles,
  activeFilter,
  searchFilters,
  handleResultClick,
  ...props
}) => {
  return (
    <SearchGroupContainer>
      <SearchBarContainer>
        <SearchContainer>
          <Search handleResultClick={handleResultClick}/>
        </SearchContainer>
        <FilterButton
          pressed={activeFilter}
          handleClick={props.handleActivateFilter}
        />
      </SearchBarContainer>

      <SearchToggleContainer>
        {activeFilter && filterToggles.map((filterToggle) => (
          <FilterToggleButton
            key={filterToggle.key}
            label={filterToggle.label}
            filter={filterToggle.key}
            selected={searchFilters[filterToggle.key]}
            handleSelectFilter={props.handleSelectFilter}
          />
        ))}
      </SearchToggleContainer>
    </SearchGroupContainer>
  )
}

SearchGroup.propTypes = {
  filterToggles: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  activeFilter: PropTypes.bool,
  searchFilters: PropTypes.object,
  handleResultClick: PropTypes.func,
}

SearchGroup.defaultProps = {
  filterToggles: [],
  activeFilter: false,
  handleResultClick: () => {},
}
