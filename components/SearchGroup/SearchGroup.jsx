import styled from "styled-components"
import PropTypes from "prop-types"

import { Search } from "../Search/Search"
import { FilterButton } from "../FilterButton/FilterButton"
import { FilterToggleButton } from "../FilterToggleButton/FilterToggleButton"

const SearchGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em 0;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
`

const SearchToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 1em 0.5em;
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
        <FilterButton active={activeFilter} />
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