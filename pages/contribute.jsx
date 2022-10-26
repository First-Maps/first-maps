import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

import { Navbar } from '../components/Navbar/Navbar'
import ContributeForm from '../components/ContributeForm'

const StyledContainer = styled.div`
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

  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
  }
`

const HalfPageDiv = styled.div`
  min-height: 50%;
  max-height: 50%;
`

export default function Contribute({
  ...props
}) {
  return (
    <>
      <Head>
        <title>Contribute | First Maps</title>
        <meta name="description" content="First Maps: Contribute" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <ContributeForm />
      </StyledContainer>

      <Navbar 
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Contribute'} 
      />
    </>
  )
}