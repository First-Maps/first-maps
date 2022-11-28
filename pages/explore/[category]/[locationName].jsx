// Libraries
import Head from 'next/head'
import styled from "styled-components"
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Componenets
import { Navbar } from '../../../components/Navbar/Navbar'
import Header from '../../../components/Header/Header'

export default function ExploreLocation() {
  const router = useRouter()
  const { category, locationName } = router.query
  const titleStr = `${locationName} | First Maps`

  const [location, setLocation] = useState(null)
  const [images, setImages] = useState(null)

  function handleImageClick(e) {
    setImages(images.map((image) => {
      if (image.name === e.target.name) {
        return {
          ...image,
          selected: true,
        }
      } else {
        return {
          ...image,
          selected: false,
        }
      }
    }))
  }



  useEffect(() => {
    (async () => {
      // only fetch data after page is hydrated, so we have access to the 'queryStr' variable
      if(!router.isReady){
        return
      }

      const res = await axios.get(`/api/devLocationsOfInterest/catname/${category}/${locationName}`)
      const location = res.data.location
      setLocation(location)
      if (location.images && location.images.length > 0) {
        setImages(location.images.map((image, index) => {
          if (index === 0) {
            return {
              selected: true,
              ...image
            }
          }
          return {
            selected: false,
            ...image
          }
        }))
      } else {
        setImages([
          {
            selected: true,
            imageLink: '/placeholder.jpg',
            name: '1',
            _id: '1'
          },
          {
            selected: false,
            imageLink: '/placeholder02.jpg',
            name: '2',
            _id: '2'
          },
          {
            selected: false,
            imageLink: '/placeholder03.jpg',
            name: '3',
            _id: '3'
          },
          {
            selected: false,
            imageLink: '/placeholder04.jpg',
            name: '4',
            _id: '4'
          },
          {
            selected: false,
            imageLink: '/placeholder05.jpg',
            name: '5',
            _id: '5'
          },
        ])
      }
    })()
  }, [router.isReady])

  return (
    <>
      <Head>
        { !router.isReady ? <title>First Maps</title> : <title>{`${titleStr}`}</title> }
        <meta name="description" content={`First Maps: ${locationName}`} />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <Header
          label={locationName}
          text="🠄 Back to Explore"
          space={true}
          dir="column-reverse"
          ali="start"
          padl="0"
          onClick={() => router.push(`/explore`)}
        />

        {images && images.length > 0 && (
          <div style={{ marginTop: "0.5em" }}>
            <SelectedImage 
              src={images.find(image => image.selected).imageLink}
              alt={locationName}
            />
          
            <Carousel>
              {images.map((image, index) => {
                return (
                  <CarouselImage
                    key={index}
                    src={image.imageLink}
                    name={image.name}
                    selected={image.selected}
                    onClick={handleImageClick}
                    alt={`${locationName} thumbnail`}
                  />
                )
              })}
            </Carousel>
          </div>
        )}

        {location && location.description && (
          <DescriptionDiv>
            <p>{location.description}</p>
          </DescriptionDiv>
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
    max-height: 100vh;
    padding-bottom: 75px;
    scrollbar-width: none;
    padding: 2em;
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

const DescriptionDiv = styled.div`
  @media (min-width: 768px) {
    max-width: 800px;
  }
`

const Heading = styled.h1`
  margin-bottom: 0;
`

const SelectedImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5em;

  @media (min-width: 768px) {
    width: 256px;
`

// horizontal carousel for images
const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 0.5em;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const CarouselImage = styled.img`
  height: 80px;
  width: auto;
  object-fit: cover;
  margin-right: 1em;
  border-radius: 0.5em;
  filter: ${props => props.selected ? 'brightness(100%)' : 'brightness(55%) grayscale(50%)'};
`
