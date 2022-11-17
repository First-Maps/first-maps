// Libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'
import { useRouter } from 'next/router'


// Componenets
import { Navbar } from '../../../components/Navbar/Navbar'
import ItemBox from '../../../components/ItemBox/ItemBox'
import { Search } from '../../../components/Search/Search'


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

const StyledLinkHeading = styled.p`
  font-size: 1em;
  color: #F8893C;
`


export default function Explore({ ...props }){
  const [categoryData, setcategoryData] = useState(false)
  let router = useRouter()
  let queryStr = useRouter().query.category // get the query string from the url

  // styled components
  // make the container centered column
  const StyledItembox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  const StyledLinkHeading = styled.p`
    font-size: 1em;
    color: #F8893C;
  `
  
  const handleClick = () => {
    // get the url of the ItemBox that was clicked
    
    // router.push('/')
  }


	useEffect(() => {
    const abortController = new AbortController()

    // only fetch data after page is hydrated, so we have access to the 'queryStr' variable
    if(!router.isReady){
      return
    }

    // if the query string is empty is not 'arts', 'history', 'language', or 'culture', redirect to the explore page
    if (queryStr == undefined || (queryStr != 'arts' && queryStr != 'history' && queryStr != 'language' && queryStr != 'culture')) {
      router.push('/explore')
    }

    // fetch data for the category, after the query string is defined, then set the state
    ;(async () => {
      try {
        let response = await axios.get(`/api/devLocationsOfInterest/${queryStr}`, { signal: abortController.signal })
        let data = response.data.Results
        setcategoryData(data)
      } catch (error) {
        console.error(error)
        if (axios.isCancel(error)) {
          return
        }
      }
    })()
      return () => {
      abortController.abort()
    }
  }, [router.isReady])

	

  return (
  	<div>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/map-solid.svg" />
      </Head>
      <StyledContainer>
          <h1>
            {queryStr}
          </h1>
        <StyledLinkHeading>
          {"< Back To Explore"}
        </StyledLinkHeading>
        
        <StyledItembox>
          { categoryData ? 
            categoryData.map((categoryDataItem => {
              return <ItemBox 
                label={categoryDataItem.name}
                description={categoryDataItem.description}
                width="331.67px"
                height="230px"
                key={categoryDataItem._id}
                onClick={handleClick}
              />
            }))
            : <p>Loading...</p>
          }
        </StyledItembox>
      </StyledContainer>
        <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        />
    </div>
    )
}