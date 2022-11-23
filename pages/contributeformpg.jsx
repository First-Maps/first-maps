import { Navbar } from '../components/Navbar/Navbar'
import ContributeForm from '../components/ContributeForm'
import styled from "styled-components"

import React from 'react'
import { useState } from 'react'
import Head from 'next/head'

import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'

import Button from '../components/Button'
import MiniButton from '../components/Button'

const StyledContainer = styled.div` 
  max-height: calc(100vh - 60px - 60px);
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

const NavbarCotnainer = styled.div``

const HalfPageDiv = styled.div`
  min-height: 50%;
  max-height: 50%;
`
export default function Contribute({
  ...props
}) {

  return (
    <div>
      <StyledContainer>
        <div>
          <Head>
            <title>Contribute | First Maps</title>
            <meta name="description" content="First Maps: Contribute" />
            <link rel="icon" href="/location-dot-solid.svg" />
          </Head>
        </div>
        <ContributeForm />
        </StyledContainer>
        <Navbar
              navPages={['Home', 'Explore', 'Contribute', 'Profile']}
              activePage={'Contribute'}
            />
      </div>
  )
}