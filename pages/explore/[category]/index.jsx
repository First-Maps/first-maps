// Import Libraries
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Import Components
import { Navbar } from '../../../components/Navbar/Navbar'
import ItemBox from '../../../components/ItemBox/ItemBox'
import { Search } from '../../../components/Search/Search'
import Header from '../../../components/Header/Header'
import SkeletonCarousel from '../../../components/SkeletonCarousel/SkeletonCarousel'

const StyledContainer = styled.div`
    max-height: calc(100vh - 60px - 58px);
    min-height: calc(100vh - 60px - 58px);
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 768px) {
      min-height: 100vh;
    }

    @media (prefers-color-scheme: dark) {
      background-color: #1F1F1F;
    }
  `

// STYLED COMPONENTS  
const StyledItembox = styled(ItemBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65vw;
`

const StyledCategorySection = styled.div`
  background-color: #F2F2F2;
  font-size: 2.5rem;
  font-family: 'fira-sans', sans-serif;
  padding: 1rem;
  align-self: start;

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`

const ItemsContainer = styled.div`
  margin-top: 1em;
`

const BackgroundContainer = styled.div`
  min-width: 100vw;
  background-image: url('${props => props.background}');
  background-size: cover;
  overflow-y: scroll;
  padding: 0 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`



export default function Explore({ ...props }) {
  const [categoryData, setcategoryData] = useState(false)
  
  let router = useRouter()
  let queryStr = useRouter().query.category // get the query string from the url
  
  // return a randomm image from the /public/backgroundPhotos folder, this function   
  // is included in the export default while the others are not to prevent errors. It is redeclared every useEffect so it's slower but it works
  function getRandomBackgroundPhoto(){
    const arrOfPhotos = [ 
      `/backgroundPhotos/background_03.jpg`, 
      `/backgroundPhotos/background_04.jpg`, 
      `/fire.jpg`,
      `/backgroundPhotos/background_16.jpg`,
      
    ]
  
    const randomIndex = Math.floor(Math.random() * arrOfPhotos.length)
    const photURL = arrOfPhotos[randomIndex]

    return photURL
  }

  const handleClick = (e) => {
    // get the url of the ItemBox that was clicked
    const innerText = e.target.innerText // print out the inner text of the html element

    // todo: redirect to the item page /explore/pageName
    router.push(`/explore/${queryStr}/${innerText}`)
  }

  // get the data from the api
  useEffect(() => {
    const abortController = new AbortController()

    // only fetch data after page is hydrated, so we have access to the 'queryStr' variable
    if (!router.isReady) {
      return
    }
    // if the query string is empty or is not 'arts', 'history', 'language', or 'culture', redirect to the explore page
    if (queryStr == undefined || (queryStr != 'arts' && queryStr != 'history' && queryStr != 'language' && queryStr != 'culture')) {
      router.push('/explore')
    }

    // fetch data for the category, after the query string is defined, then set the state
    ; (async () => {
      try {
        let response = await axios.get(`/api/devLocationsOfInterest/${queryStr}`, { signal: abortController.signal })
        let data = response.data.Results
        // sort the data alphabetically
        data.sort((a, b) => a.name.localeCompare(b.name))
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
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      

      <StyledContainer
        
      >
        <StyledCategorySection>
          {queryStr && <>
            <Header
              label={queryStr[0].toUpperCase() + queryStr.substr(1)}
              text="< Back to Explore"
              space={true}
              dir="column-reverse"
              ali="start"
              padl="0"
              onClick={() => router.push(`/explore`)}
            />
          </>}
        </StyledCategorySection>

        <BackgroundContainer background='/fire.jpg'>
        {categoryData ?
          <ItemsContainer>
            {categoryData.map(categoryDataItem => {
              return <StyledItembox
                label={categoryDataItem.name}
                description={categoryDataItem.description}
                width="331.67px"
                height="230px"
                key={categoryDataItem._id}
                onClick={handleClick}
                img={`/categoryPhotos/${queryStr}.png`}
              />
            })}
          </ItemsContainer>
          : <SkeletonCarousel />
        }
        </BackgroundContainer>
      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'}
      />
    </div>
  )
}