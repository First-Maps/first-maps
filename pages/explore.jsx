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
  const [history, setHistory] = useState([])
  const [language, setLanguage] = useState([])
  const [arts, setArts] = useState([])
  const [culture, setCulture] = useState([])

	// useEffect to fetch data for languages, arts, culture and history, setState for each
	useEffect(() => {
    (async () => {
      try {
				let histData = await axios.get("/api/devLocationsOfInterest/history")
				let langData = await axios.get("/api/devLocationsOfInterest/language")
        let artsData = await axios.get("/api/devLocationsOfInterest/arts")
        let cultData = await axios.get("/api/devLocationsOfInterest/culture")

        histData = histData.data.Results
        langData = langData.data.Results
        artsData = artsData.data.Results
        cultData = cultData.data.Results

        setHistory(histData)
        setLanguage(langData)
        setArts(artsData)
        setCulture(cultData)
        
        console.log(history, language, arts, culture)
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
      
        
        
        
        <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        />
    </div>
    )
}