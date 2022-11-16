// libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'

// components, some loaded from old file. take out all of the ones you dont' use
import { Navbar } from '../../components/Navbar/Navbar'
import ItemBox from '../../components/ItemBox/ItemBox'

// Styled Components
// section for the categories, vertical column, centered
const StyledCategorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #F2F2F2;
`
// max width, fixed at bottom of screen
const StyledNavBarSection = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #F2F2F2;
  margin-bottom: 0;
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

        // concate data to 10 items
        histData = histData.slice(0, 3)
        langData = langData.slice(0, 3)
        artsData = artsData.slice(0, 3)
        cultData = cultData.slice(0, 3)

        setHistory(histData)
        setLanguage(langData)
        setArts(artsData)
        setCulture(cultData)
        
        // console.log(history, language, arts, culture)
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
      <StyledCategorySection>
        { history ? 
          history.map((historyItem => {
            return <ItemBox 
              label={historyItem.name}
              description={historyItem.description}
              width="331.67px"
              height="230px"
              key={historyItem._id}
            />
          }))
          : "null" 
        }
      </StyledCategorySection>
      <h1>Language</h1>
      
        { language ? 
          language.map((languagItem => {
            return <ItemBox 
              label={languagItem.name}
              description={languagItem.description}
              width="331.67px"
              height="230px"
              key={languagItem._id}
            />
          }))
          : null
        }
      
      <h1>Arts</h1>
      
        { arts ? 
          arts.map((artsItem => {
            return <ItemBox 
              label={artsItem.name}
              description={artsItem.description}
              width="331.67px"
              height="230px"
              key={artsItem._id}
            />
          }))
          : null 
        }
      
      <h1>Culture</h1>
      
        { culture ? 
          culture.map((artsItem => {
            return <ItemBox 
              label={artsItem.name}
              description={artsItem.description}
              width="331.67px"
              height="230px"
              key={artsItem._id}
            />
          }))
          : null
        }
      
      <StyledNavBarSection>
        <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        />
      </StyledNavBarSection>
    </div>
    )
}



// const StyledContainer = styled.div`
// //   max-height: calc(100vh - 60px - 60px);
// //   width: 100vw;
// //   max-width: 100vw;
// //   margin: 0;
// //   padding: 1.5em;
// //   background-color: #F2F2F2;
// //   overflow-y: scroll;

// //   @media (min-width: 768px) {
// //     height: 100vh;
// //   }

// //   @media (prefers-color-scheme: dark) {
// //     background-color: #1F1F1F;
// //   }
// // `