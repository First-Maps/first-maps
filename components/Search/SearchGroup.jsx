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
  width: 100vw;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }
`

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const SearchGroup = ({
  filterToggles,
  activeFilter,
  ...props
}) => {
  return (
    <SearchGroupContainer>
      <SearchBarContainer>
        <Search />
        <FilterButton pressed={activeFilter} />
      </SearchBarContainer>

      <SearchToggleContainer>
        {activeFilter && filterToggles.map((filterToggle) => (
          <FilterToggleButton
            key = {filterToggle.key}
            label={filterToggle.label}
            selected={filterToggle.selected}
          />
        ))}
      </SearchToggleContainer>
    </SearchGroupContainer>
  );
}

SearchGroup.propTypes = {
  filterToggles: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      label: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
  activeFilter: PropTypes.bool,
}

SearchGroup.defaultProps = {
  filterToggles: [],
  activeFilter: false,
}
