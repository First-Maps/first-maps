


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
export default function RecentlyViewed({
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
  const ItemArt = () => {
    setPage(false);
    setLanguages(false);
    setArts(true);
    setLang(false);
    setHistory(false);
  };
  const ItemLang = () => {
    setPage(false);
    setLanguages(false);
    setArts(false);
    setLang(true);
    setHistory(false);
  };
  const ItemHistory = () => {
    setPage(false);
    setLanguages(false);
    setArts(false);
    setLang(true);
    setHistory(true);
  };
  return (
    <>
      <Head>
        <title>Recently Viewed | First Maps</title>
        <meta name="description" content="First Maps: Recently Viewed" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>
      <StyledContainer>
        {
          page ? (<><div>
          </div>
            <Header
              label="Recently Viewed"
            />
            <ItemBox
              label='Sqamish Nation Community Art Event in North Vancouver'
              width="331.67px"
              height="230px"
              onClick={ItemArt}
            />
            <ItemBox
              label='Learn a Language: Western Albenaki (Algonquin)'
              width="331.67px"
              height="230px"
              onClick={ItemLang}
            />
            <ItemBox
              label='Kelli Clifton Gitgaata (Hartle y Bay/Tsimshian)'
              width="331.67px"
              height="230px"
              onClick={ItemHistory}
            />
          </>) : null
        }
        {
          Arts && (
            <div>
              <Header
                label='Sqamish Nation North Van Community Art Events'
                text='↽ Back to My Contributions'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                onClick={GoBack}
              />
              <ItemBox
                label=''
                width="331.67px"
                height="230px"
              />
              <Bodytext
                label='Every year from December 16 to 29, an art festival is held at Sqaumish Nation located at Lower Lonsdale. For those interested in visting, hours are 1pm to 4pm.'
              />
            </div>
          )
        }
        {
          Lang && (
            <div>
              <Header
                label='Western Albenaki (Algonquin)'
                text='↽ Back to My Contributions'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                onClick={GoBack}
              />
              <div> 
              <VideoPlayer 
              url="https://www.youtube.com/watch?v=YspD--5nMEI" 
              width='331.67px'
              height='230px'
              />
              </div>
              <Bodytext
                label='Abenaki (Eastern: Alənαpαtəwéwαkan, Western: Alnôbaôdwawôgan) is an endangered Algonquian language of Quebec and the northern states of New England. The language has Eastern and Western forms which differ in vocabulary and phonology and are sometimes considered distinct languages. Click the video to learn Abenaki basic, and the video description for supplementary material.'
              />
            </div>
          )
        }
        {
          History && (
              <div>
                <Header
                  label='Western Albenakiddd (Algonquin)'
                  text='↽ Back to My Contributions'
                  dir="column-reverse"
                  ali="flex-start"
                  padl="0"
                  onClick={GoBack}
                />
                <div> 
                <VideoPlayer 
                url="https://www.youtube.com/watch?v=YspD--5nMEI" 
                width='331.67px'
                height='230px'
                />
                </div>
                <Bodytext
                  label='Abenaki (Eastern: Alənαpαtəwéwαkan, Western: Alnôbaôdwawôgan) is an endangered Algonquian language of Quebec and the northern states of New England. The language has Eastern and Western forms which differ in vocabulary and phonology and are sometimes considered distinct languages. Click the video to learn Abenaki basic, and the video description for supplementary material.'
                />
              </div>
            )
          }

      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Profile'}
      />
    </>
  )
}

