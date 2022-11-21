import { Navbar } from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import React, { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'

const StyledContainer = styled.div`
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  @media (min-width: 768px) {
    height: 100vh;
  }
  .p {
    font-family: 'Fira Sans', sans-serif !important;
  }
`

export default function Help({
  ...props
}) {
  const [page, setPage] = useState(true)
  const [Langauges, setLanguages] = useState(false)
  const [Arts, setArts] = useState(false)
  const [Lang, setLang] = useState(false)
  const [History, setHistory] = useState(false)

  const GoBack = () => {
    setPage(true);
    setLanguages(false);
    setArts(false);
    setLang(false);
    setHistory(false);
  };

  return (
    <>
      <Head>
        <title>Recently Viewed | First Maps</title>
        <meta name="description" content="First Maps: Recently Viewed" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        Coming soon
  

      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Profile'}
      />
    </>
  )
}