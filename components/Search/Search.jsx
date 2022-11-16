import styled from "styled-components"
import PropTypes from "prop-types"
import { useState, useEffect } from 'react'
import axios from 'axios'

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

const DataResults = styled.div`
  margin-top: 0.25em;
  border-radius: 0.75em;
  display: flex;
  font-size: 1.2em;
  flex-direction: column;
  width: 80vw;
  background-color: white;
  overflow: hidden;
  overflow-y: auto;
  max-height: 13em;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    width: 16em;
  }
`

const ResultItem = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5em 1em;
  width: 100%;
  height: 2.6em;
  border-bottom: 1px solid #eaeaea;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`

export const Search = ({
  placeholder,
  handleResultClick,
  ...props
}) => {
  const [filteredResults, setFilteredResults] = useState([])
  const [data, setData] = useState([])

  const fetchData = async () => {
    let request
    let locationsOfInterestArray

    // CHOOSE A DATABASE TO FETCH FROM: "staging" or "dev"
    let databaseToFetchFrom = "dev"

    // call API based on chosen database 
    if (databaseToFetchFrom === "staging") {
      request = await axios.get("/api/locationsOfInterest")
      locationsOfInterestArray = request.data.results
    } else if (databaseToFetchFrom === "dev") {
      request = await axios.get("/api/devLocationsOfInterest")
      locationsOfInterestArray = request.data.results
    } else {
      console.error('`databaseToFetchFrom` is not a valid database. See Map.jsx')
    }

    // reverses cordinates to match leaflet's format
    locationsOfInterestArray.map((location) => {
      // the map expects latitude-first, but the db has longitude-first
      location.coordinates = [location.coordinates[1], location.coordinates[0]]
    })
    setData(locationsOfInterestArray)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleFilter = (event) => {
    const searchWord = event.target.value
    let newFilter = data.filter((location) => {
      return location.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    newFilter.sort((a, b) => {
      return a.coordinates[0][1] - b.coordinates[0]
    })
    if (!searchWord) {
      setFilteredResults([])
    } else {
      setFilteredResults(newFilter.slice(0, 14))
    }
  }

  const onResultClick = (event) => {
    const location = filteredResults.filter((location) => location.name === event.target.innerText)
    handleResultClick(location[0])
    // console.log(location[0].coordinates)
  }

  return (
    <>
      <SearchInput
        placeholder={placeholder}
        onChange={handleFilter}
        {...props}
      />
      <DataResults>
        {filteredResults.map((location, index) => (
          <ResultItem key={index} onClick={onResultClick}>{location.name}</ResultItem>
        ))}
      </DataResults>
    </>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  handleResultClick: PropTypes.func,
}

Search.defaultProps = {
  placeholder: "Search",
  handleResultClick: () => {},
}