import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

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

export default function Login({
  ...props
}) {
  return (
    <>
      <Head>
        <title>Login | First Maps</title>
        <meta name="description" content="First Maps: Login" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <h1>Login</h1>
        <sub>Coming soon...</sub>
      </StyledContainer>
    </>
  )
}