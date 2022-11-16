// libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'

// components, some loaded from old file. take out all of the ones you dont' use
import { Navbar } from '../../components/Navbar/Navbar'
import ItemBox from '../../components/ItemBox/ItemBox'

// Styled Components

const StyledCategorySection = styled.div`
  min-height: 300px;
  max-height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1.5rem;
`

const StyledNavBarSection = styled.div`
  width: 100%;
  bottom: 60px;
  display: flex;
  left: 0;
  justify-content: space-around;
  background-color: #F2F2F2;
`

const StyledContainer = styled.div`
  max-height: calc(100vh - 60px - 60px);
  min-height: calc(100vh - 60px - 60px);
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

const StyledItemBox = styled.div`
  width: 331.67px;
  height: 230px;
  margin: 0 1em;
`

const StyledReturnHeading = styled.p`
  font-size: 0.75em;
  color: #F8893C;
`

const StyledCategoryHeading = styled.div`
  display: inline
`

// TODO: style the 'see all' link
// TODO: add links to the posts, see all links, headings and back to explore



export default function Explore({ ...props }) {
  const [history, setHistory] = useState([])
  const [language, setLanguage] = useState([])
  const [arts, setArts] = useState([])
  const [culture, setCulture] = useState([])

  // useEffect to fetch data for languages, arts, culture and history, setState for each
  useEffect(() => {
    (async () => {
      try {
        // TODO: Make this a single request to the server
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
        histData = histData.slice(0, 10)
        langData = langData.slice(0, 10)
        artsData = artsData.slice(0, 10)
        cultData = cultData.slice(0, 10)

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
    <>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer>
        <StyledReturnHeading>
          <p>{"< Back To Explore"}</p>
        </StyledReturnHeading>
        <h1>History</h1> <span>{"see all >"}</span>
        <StyledCategorySection>
          {history ?
            history.map((historyItem => {
              return <StyledItemBox>
                <ItemBox
                  label={historyItem.name}
                  description={historyItem.description}
                  width="331.67px"
                  height="230px"
                  key={historyItem._id}
                />
              </StyledItemBox>
            }))
            : "null"
          }
        </StyledCategorySection>

        <h1>Language</h1> <span>{"see all >"}</span>
        <StyledCategorySection>
          {language ?
            language.map((languagItem => {
              return <StyledItemBox>
                <ItemBox
                  label={languagItem.name}
                  description={languagItem.description}
                  width="331.67px"
                  height="230px"
                  key={languagItem._id}
                />
              </StyledItemBox>
            }))
            : null
          }
        </StyledCategorySection>

        <h1>Arts</h1> <span>{"see all >"}</span>
        <StyledCategorySection>
          {arts ?
            arts.map((artsItem => {
              return <StyledItemBox>
                <ItemBox
                  label={artsItem.name}
                  description={artsItem.description}
                  width="331.67px"
                  height="230px"
                  key={artsItem._id}
                />
              </StyledItemBox>
            }))
            : null
          }
        </StyledCategorySection>

        <h1>Culture</h1> <span>{"see all >"}</span>
        <StyledCategorySection>
          {culture ?
            culture.map((artsItem => {
              return <StyledItemBox>
                <ItemBox
                  label={artsItem.name}
                  description={artsItem.description}
                  width="331.67px"
                  height="230px"
                  key={artsItem._id}
                />
              </StyledItemBox>
            }))
            : null
          }
        </StyledCategorySection>

      </StyledContainer>
      <StyledNavBarSection>
        <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        />
      </StyledNavBarSection>
    </>
  )
}


