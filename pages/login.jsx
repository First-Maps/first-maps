import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

import Link from 'next/link'
import LoginButton from '../components/LoginButton/LoginButton';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Logo = styled.img`
  width: 86px;
  height: 86px;
  margin: 0 0 2.5em 0;
`
const LoginText = styled.div`
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 16px;
margin: 0 0 1.5em 0;
`

const Fotter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 8.5em 0 0 0;
  padding: 0;

  a {
    color: #FE672F;
    text-decoration: none;
    margin: 0 0 0 0.5em;
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
        <Logo 
          src="/logo.png"
        />
        <LoginText>
          Log In
        </LoginText>
        <LoginButton
          text="Continue with Email"
          Logo="Email.png"
          color={"#FE672F"}
          onClick={() => {
            console.log("Log In with Email")
          }}
        />
        <LoginButton
          text="Continue with Google"
          Logo="Google.png"
          color={"#4285F4"}
          onClick={() => {
            console.log("Log In with Google")
          }}
        />
        <LoginButton
          text="Continue with Facebook"
          Logo="Facebook.png"
          color={"#3B5998"}
          onClick={() => {
            console.log("Log In with Facebook")
          }}
        />
        <LoginButton
          text="Continue with Apple"
          Logo="Apple.png"
          color={"#000000"}
          onClick={() => {
            console.log("Log In with Apple")
          }}
        />

        <Fotter>
          Don&apos;t have an account?<Link href="/signup">Sign Up</Link>
        </Fotter>
      </StyledContainer>
    </>
  )
}