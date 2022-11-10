// libraries
import { useState, useEffect } from 'react'
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

export default function Explore({ ...props }){
	const [languagesData, setLanguageData] = useState([])
	const [artsData, setArtsData] = useState([])
	const [historyData, setHistoryData] = useState([])
	const [cultureData, setCultureData] = useState([])

	// useEffect to fetch data for languages, arts, culture and history, setState for each
	useEffect(() => {
    (async () => {
      // if (markers.length > 0) {
      //   return
      // }

      try {
        let request
        let locationsOfInterestArray
				let hist, lang, arts, cult = []



        // CHOOSE A DATABASE TO FETCH FROM: "staging" or "dev"
        let databaseToFetchFrom = "dev" // TODO:  put it in .env.public, then use process.env.DATABASE_TO_FETCH_FROM

        // call API based on chosen database 
        if (databaseToFetchFrom === "staging") {
          request = await axios.get("/api/locationsOfInterest")
          locationsOfInterestArray = request.data.results
        } else if (databaseToFetchFrom === "dev") {
					
					// not tested yet
					hist = await axios.get("/api/locationsOfInterest/history")
					lang = await axios.get("/api/locationsOfInterest/languages")
					arts = await axios.get("/api/locationsOfInterest/arts")
					cult = await axios.get("/api/locationsOfInterest/culture")

					// TODO: test to see if the requests work

          
          locationsOfInterestArray = request.data.results
        } else {
          console.error('`databaseToFetchFrom` is not a valid database. See Map.jsx')
        }
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }, [])



  return (
  	<div>
      <p>explore page, under construction</p>
        <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        />
    </div>
    )
}