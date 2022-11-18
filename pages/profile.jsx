import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"

import { Navbar } from '../components/Navbar/Navbar'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'

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

const ProfileTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  margin: 1.5em 0 0 0;
  padding: 0;
  
`

const ProfileTab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 0 1em;
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #E5E5E5;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #2F2F2F;
    }
  }
`

export default function Profile({
  ...props
}) {
  return (
    <>
      <Head>
        <title>Profile | First Maps</title>
        <meta name="description" content="First Maps: Profile" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>

      <StyledContainer>
        <ProfileHeader 
          profilePicture="/profile-picture.png" // temporary
          profileName="Ana Williams"// temporary
        />
        <ProfileTabs>
          <ProfileTab>Account Settings</ProfileTab>
          <ProfileTab>Communities</ProfileTab>
          <ProfileTab>Recently Viewed</ProfileTab>
          <ProfileTab>Help</ProfileTab>
        </ProfileTabs>
      </StyledContainer>


      <Navbar
        navPages={['Home', 'Explore', 'Contribute', 'Profile']}
        activePage={'Profile'}
      />

    </>
  )
}
