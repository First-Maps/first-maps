import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

import { Navbar } from '../components/Navbar/Navbar'

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
  return (
    <>
      <Head>
        <title>Explore | First Maps</title>
        <meta name="description" content="First Maps: Explore" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <h1>Explore</h1>
        <sub>Coming soon...</sub>
      </StyledContainer>

      <Navbar 
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Explore'} 
      />
    </>
  )
}