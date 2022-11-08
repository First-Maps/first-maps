// libraries
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'

// components
import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import { Navbar } from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'

const StyledContainer = styled.div`
  max-height: calc(100vh - 60px - 60px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`

export default function Explore({
  ...props
}) {
  const [page, setPage] = useState(true)
  const [Langauges, setLanguages] = useState(false)
  const [Arts, setArts] = useState(false)
  const [Lang, setLang] = useState(false)



  const StateHandler = () => {
    setPage(false);
    setLanguages(true);
    setArts(false);
    setLang(false);
  };

  const GoBack = () => {
    setPage(true);
    setLanguages(false);
    setArts(false);
    setLang(false);
  };

  const ItemArt = () => {
    setPage(false);
    setLanguages(false);
    setArts(true);
    setLang(false);
  };

  const ItemLang = () => {
    setPage(false);
    setLanguages(false);
    setArts(false);
    setLang(true);
  };

  
  // fetch locationsOfInterest data from database
  useEffect(() => {
    (async () => {
     
      try {
        let request
        let locationsOfInterestArray

        // CHOOSE A DATABASE TO FETCH FROM: "staging" or "dev"
        let databaseToFetchFrom = "dev"

        // call API based on chosen database 
        if (databaseToFetchFrom === "staging") {
          request = await axios.get("/api/locationsOfInterest")
          locationsOfInterestArray = request.data.Results
        } else if (databaseToFetchFrom === "dev") {
          request = await axios.get("/api/devLocationsOfInterest")
          locationsOfInterestArray = request.data.Results
        } else {
          console.error('`databaseToFetchFrom` is not a valid database. See Map.jsx')
        }

        // reverses cordinates to match leaflet's format
        locationsOfInterestArray.map((location) => {
          // the map expects latitude-first, but the db has longitude-first
          location.coordinates = [location.coordinates[1], location.coordinates[0]]
        })

      } catch (error) {
        console.error(error)

        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }, [])






  return (
    <>
      <Head>
        <title>Explore | First Maps</title>
        <meta name="description" content="First Maps: Explore" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        {
          page ? (<><div>
            <Header
              label="Languages"
              text="see all ➤"
              onClick={StateHandler}
            ></Header>
          </div><Carousel 
            onClick={ItemLang}
          />
            <Header
              label="Arts and Culture"
            />
            <ItemBox
              label='Kelli Clifton Gitgaata (Hartle y Bay/Tsimshian)'
              width="331.67px"
              height="230px"
              onClick={ItemArt}
            />
            <ItemBox
              label='Kelli Clifton Gitgaata (Hartle y Bay/Tsimshian)'
              width="331.67px"
              height="230px"
              onClick={ItemArt}
            />
            <ItemBox
              label='Kelli Clifton Gitgaata (Hartle y Bay/Tsimshian)'
              width="331.67px"
              height="230px"
              onClick={ItemArt}
            />
          </>) : null
        }

        {
          Langauges && (
            <ExploreLanguages
              onClick={GoBack}
            />
          )
        }

        {
          Arts && (
            <div>
              <Header
                label='Kelli Clifton Prince Rupert BC Canada'
                text='↽ Back to Explore'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                onClick={GoBack}
              />
              <ItemBox
                label=''
                width="331.67px"
                height="230px"
              />

              <Bodytext
                label='Abenaki (Eastern: Alənαpαtəwéwαkan, Western: Alnôbaôdwawôgan) is an endangered Algonquian language of Quebec and the northern states of New England. The language has Eastern and Western forms which differ in vocabulary and phonology and are sometimes considered distinct languages.'
              />
            </div>
          )
        }

        {
          Lang && (
            <div>
              <Header
                label='Western Albenaki (Algonquin)'
                text='↽ Back to Explore'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                onClick={GoBack}
              />
              <div> 
              <VideoPlayer 
                url="https://www.youtube.com/watch?v=YspD--5nMEI" 
                width='331.67px'
                height='230px'
              />
              </div>
              <Bodytext
                label='Abenaki (Eastern: Alənαpαtəwéwαkan, Western: Alnôbaôdwawôgan) is an endangered Algonquian language of Quebec and the northern states of New England. The language has Eastern and Western forms which differ in vocabulary and phonology and are sometimes considered distinct languages.'
              />
            </div>
          )
        }
      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'}
      />
    </>
  )
}