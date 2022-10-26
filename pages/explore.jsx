import React,{useState} from 'react'
import Head from 'next/head'
import styled from "styled-components"
import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'

import { Navbar } from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import ItemBox from '../components/ItemBox/ItemBox'

const StyledContainer = styled.div`
  min-height: calc(100vh - 60px);
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
`

export default function Explore({
  ...props
}) {
  const [page, setPage] = useState(true)
  return (
    <>
      <Head>
        <title>Explore | First Maps</title>
        <meta name="description" content="First Maps: Explore" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        {
        page ? (<><div>
            <Header
              label="Languages"
              text="see all ➤"
              onClick={() => setPage(false)}
            ></Header>
          </div><Carousel />
            <Header
              label="Arts and Culture"
              text="see all ➤" />
              <ItemBox
              label='Kelli Clifton Gitgaata (Hartle y Bay/Tsimshian)'
              width="331.67px"
              height="230px" /></>) : null
        }

        {
        <ExploreLanguages/>
        }


      </StyledContainer>
      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'}
      />
    </>
  )
}