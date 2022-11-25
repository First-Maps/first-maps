import React from 'react'
import styled from "styled-components"
import Head from 'next/head'
import { useState, useNavigate } from 'react'

const FormDiv = styled.div`
  max-width: 100%;
  margin: 1em 0;
  padding: 1em;
  
  position: relative;
  left: 0; right: 0; bottom: 0;
  padding: 3px 8px;
  z-index: 1;
  font-family: 'Urbanist';
`

const Title = styled.p`
  font-style: bold;
  color: white;
  font-size: 22px;
`

const Para = styled.p`
  margin-top: 0;
  color: white;
  font-size: 16px;
`

export default function IntroText() {
    return (
      <>
        <Head>
          <title>First Maps</title>
          <meta name="description" content="First Maps" />
          <link rel="icon" href="/location-dot-solid.svg" />
          <link href='https://fonts.googleapis.com/css?family=Urbanist&display=optional' rel='stylesheet'/>
        </Head>
        <FormDiv>
            <Title>Welcome to</Title>
            <Title>FirstMaps! 🍁</Title>
        </FormDiv>

        <FormDiv>
            <Para>FirstMaps is an interactive resource</Para>
            <Para>for indigenous community members </Para>
            <Para>and the general public to establish</Para>
            <Para>and strengthen connections in the</Para>
            <Para>spheres of culture, art and tourism.</Para>
        </FormDiv>
      </>
    )
}