// Libraries
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Componenets
import { Navbar } from '../../../components/Navbar/Navbar'

export default function ExploreLocation() {
  const router = useRouter()
  const { category, locationName } = router.query
  const titleStr = `${locationName} | First Maps`

  const [location, setLocation] = useState(null)

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/api/devLocationsOfInterest/catname/${category}/${locationName}`)
      const location = res.data.location
      console.log('location', location)
      setLocation(location)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>{titleStr}</title>
        <meta name="description" content={`First Maps: ${locationName}`} />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <Link href={'/explore'}>
          <LinkText>Explore</LinkText>
        </Link> 
        &nbsp;
        &#62;
        &nbsp;
        <Link href={`/explore/${category}`}>
          <LinkText>{category}</LinkText>
        </Link>

        <Heading>{locationName}</Heading>
        <CategoryPara>{category}</CategoryPara>

        {location && (!location.images || location.images.length === 0) &&
          <div>
            <ImagePlaceholder 
              src='/placeholder.jpg'
            />
          </div>
        }

        {location && location.images && location.images.length > 0 && (
          <div>
            <FullWidthImage src={location.images[0].imageLink} />
          </div>
        )}

        {location && location.description && (
          <p>{location.description}</p>
        )}

      </StyledContainer>

      <Navbar 
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'}
      />
    </>
  )
}


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

const LinkText = styled.span`
  color: #F8893C;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.1em;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 1em;
`

const CategoryPara = styled.p`
  margin-top: 0;
`

const Heading = styled.h1`
  margin-bottom: 0;
`

const ImagePlaceholder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
`

const FullWidthImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5em;
`