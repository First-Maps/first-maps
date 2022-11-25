import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

import {useRouter} from "next/router";
// import router from 'next/router';

import { Navbar } from '../components/Navbar/Navbar'
import ContributeForm from '../components/ContributeForm'

import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'

import Button from '../components/Button'
//import MiniButton from '../components/Button'

import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div` 
  min-height: calc(100vh - 60px - 58px);
  max-height: calc(100vh - 60px - 58px);
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

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Contribute({
  ...props
}) {
  const [Contributes, setContributes] = useState(false)
  const router = useRouter(); //get a router obj from library after u imported, includes routing stuff like going to new pages

  const ItemContributes = () => {
    setContributes(true);
  };
  
  return (
    <>
      <Head>
        <title>Contribute | First Maps</title>
        <meta name="description" content="First Maps: Contribute" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>
      <StyledContainer>
         <div>
              <Header
                label='What are Contributions?'
                // text='↽ Back to Explore'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                // onClick={ItemContributes} 
              />
              <VideoContainer>
                <VideoPlayer  
                  url="https://www.youtube.com/watch?v=YspD--5nMEI" 
                  width='330px'
                  height='230px'
                />
              </VideoContainer>
              <Bodytext
                label='You can help other communities by contributing cultural, art, business, or accurate translations
                 of different First Nation languages, particularly Basic, by filling out a form below to help create 
                 a community catered experience.'
              />
            </div>

            

            <Button text = "Start Here" onClick={() => router.push('/contributeform')}>
            </Button> 

      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Contribute'}
      />
    </>
  )
}