// libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'

// components, some loaded from old file. take out all of the ones you dont' use
import ExploreLanguages from '../../components/ExplorePages/ExploreLanguages'
import Bodytext from '../../components/BodyText/Bodytext'
import { Navbar } from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import Header from '../../components/Header/Header'
import ItemBox from '../../components/ItemBox/ItemBox'
import VideoPlayer from '../../components/VideoPlayer'

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
        // make 4 separate requests for each of the 4 categories
				let histResponse = await axios.get("/api/devLocationsOfInterest/history")
				let langResponse = await axios.get("/api/devLocationsOfInterest/language")
        let artsResponse = await axios.get("/api/devLocationsOfInterest/arts")
        let cultResponse = await axios.get("/api/devLocationsOfInterest/culture")

        // get the data from the response
        let histData = histResponse.data.Results
        let langData = langResponse.data.Results
        let artsData = artsResponse.data.Results
        let cultData = cultResponse.data.Results

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
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>History</h1>
      <div className="historyContainer">
        { history ? 
          history.map((historyItem => {
            return <ItemBox 
              label={historyItem.name}
              description={historyItem.description}
              width="331.67px"
              height="230px"
            />
          }))
          : "null" 
        }
      </div>
      <h1>Language</h1>
      <div className="languageContainer">
        { language ? 
          language.map((languagItem => {
            return <ItemBox 
              label={languagItem.name}
              description={languagItem.description}
              width="331.67px"
              height="230px"
            />
          }))
          : null
        }
      </div>
      <h1>Arts</h1>
      <div className="artsContainer">
        { arts ? 
          arts.map((artsItem => {
            return <ItemBox 
              label={artsItem.name}
              description={artsItem.description}
              width="331.67px"
              height="230px"
            />
          }))
          : null 
        }
      </div>
      <h1>Culture</h1>
      <div className="cultureContainer">
        { culture ? 
          culture.map((artsItem => {
            return <ItemBox 
              label={artsItem.name}
              description={artsItem.description}
              width="331.67px"
              height="230px"
            />
          }))
          : null
        }
      </div>
  
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'}
      />
    </div>
    )
}