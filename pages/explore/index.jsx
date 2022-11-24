// libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components, some loaded from old file. take out all of the ones you dont' use
import { Navbar } from '../../components/Navbar/Navbar'
import ItemBox from '../../components/ItemBox/ItemBox'
import { Search } from '../../components/Search/Search'
import Header from '../../components/Header/Header'

// Styled Components
const StyledCategorySection = styled.div`
  min-height: ${props => props.height ? props.height : '300px'};
  max-height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1.5em;
  padding: 1em;
`

const StyledSearch = styled(Search)`
  margin-left: 1rem;
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
  max-height: calc(100vh - 60px - 58px);
  min-height: calc(100vh - 60px - 58px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    min-height: 100vh;
    padding-bottom: 75px;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`

const StyledItemBox = styled.div`
  width: 330px;
  height: 230px;
  margin: 0 1em;
`

const StyledLinkHeading = styled.div`
  font-size: 1em;
  color: #F8893C;
`

const StyledCategoryHeading = styled.div`
  
`

export default function Explore({ ...props }) {
  const [history, setHistory] = useState([])
  const [language, setLanguage] = useState([])
  const [arts, setArts] = useState([])
  const [culture, setCulture] = useState([])


  let router = useRouter()
  
  
  
  // useEffect to fetch data for languages, arts, culture and history, setState for each
  useEffect(() => {
    (async () => {
      try {
        // array used to store data from given category
        let histArray = []
        let langArray = []
        let artsArray = []
        let cultArray = []
        
        // fetch data from all categories
        let response = await axios.get("/api/devLocationsOfInterest")
        let results = response.data.results

        // loop through results and push to appropriate array        
        for (let result of results) {
          
          // if there are 10 of each category, break out of loop
          if (
            histArray.length >= 10 
            && langArray.length >= 10 
            && artsArray.length >= 10 
            && cultArray.length >= 10
          ) {
            break
          }

          if (result.category === "history") {
            histArray.push(result)
          } else if (result.category === "language") {
            langArray.push(result)
          } else if (result.category === "arts") {
            artsArray.push(result)
          } else if (result.category === "culture") {
            cultArray.push(result)
          }
        }

        histArray.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

        langArray.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

        artsArray.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

        cultArray.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })

        // set state for each category
        setHistory(histArray)
        setLanguage(langArray)
        setArts(artsArray)
        setCulture(cultArray)
        
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
  }, [])
  

  // HANDLERS
  const handleClick = async (e) => {
    // get the url of the ItemBox that was clicked
    const innerText = e.target.innerText // print out the inner text of the html element
    
    // get locationOfInterest data from location name
    let response = await axios.get(`/api/devLocationsOfInterest/getLocationFromName/${innerText}`)
    let category = response.data.results.category
    
    router.push(`/explore/${category}/${innerText}`)
    

    // TODO: redirect to the item page /explore/pageName
    // router.push(`/explore/${s}`)
  }
  
  return (
    <>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>
      <StyledContainer>
        <Search />

        <Header
          label="Language"
          text="see all ➤"
          space={true}
          onClick={() => router.push(`/explore/language`)}
        />
        <StyledCategorySection height="20px">
          {language ?
            language.map((languagItem => {
              return <ItemBox
                key={languagItem._id}
                label={languagItem.name}
                description={languagItem.description}
                category="language"
                margy="1em"
                padb='1em'
                padl='1.25em'
                onClick={handleClick}
            />
            }))
            : null
          }
        </StyledCategorySection>

        <Header
          label="History"
          text="see all ➤"
          space={true}
          onClick={() => router.push(`/explore/history`)}
        />
        <StyledCategorySection>
          { history ?
            history.map((historyItem => {
              return <ItemBox
                label={historyItem.name}
                description={historyItem.description}
                width="330px"
                height="230px"
                margy="1em"
                key={historyItem._id}
                onClick={handleClick}
                category="history"
            />
            }))
            : "null"
          }
        </StyledCategorySection>

        <Header
          label="Arts"
          text="see all ➤"
          space={true}
          onClick={() => router.push(`/explore/arts`)}
        />
        <StyledCategorySection>
          {arts ?
            arts.map((artsItem => {
              return <ItemBox
                label={artsItem.name}
                description={artsItem.description}
                width="330px"
                height="230px"
                margy="1em"
                key={artsItem._id}
                onClick={handleClick}
                category="arts"
              />
            }))
            : null
          }
        </StyledCategorySection>

        <Header
          label="Culture"
          text="see all ➤"
          space={true}
          onClick={() => router.push(`/explore/culture`)}
        />
        <StyledCategorySection>
          {culture ?
            culture.map((artsItem => {
              return <ItemBox
                label={artsItem.name}
                description={artsItem.description}
                width="330px"
                height="230px"
                margy="1em"
                key={artsItem._id}
                onClick={handleClick}
                category="culture"
               />
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