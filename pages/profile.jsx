
import React from 'react'
import { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import { Navbar } from '../components/Navbar/Navbar'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import {useRouter} from "next/router";

const StyledOutsideContainer = styled.div`
  height: 100vh;
  bottom: 0;
`

const StyledContainer = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;
  z-index:3;
  @media (min-width: 768px) {
    height: 100vh;
    z-index:3;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
    z-index:3;
  }
`
const ProfileTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 100%;
  margin: 1.1em 0 0 0;
  padding: 0;
  z-index:3;
`
const NavbarContainer = styled.div`
  bottom: 0 !important;
  height: 100%;
`

const ProfileTab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0 1em;
  cursor: pointer;
  z-index:3;
  background-color: #FFFFFF;
  border-radius: 30px;
  margin-top: 16px;
  @media (min-width: 768px) {
    height: 100vh;
    z-index:3;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #2B2A33;
    z-index:3;
  }
  
  &:hover {
    background-color: #E5E5E5;
    z-index:3;
  }
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #2F2F2F;
      z-index:3;
    }
  }
`
export default function Profile({
  ...props
}) {
  const router = useRouter(); //get a router obj from library after u imported, includes routing stuff like going to new pages
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
            <ProfileTab onClick={() => router.push('/RecentlyViewed')}>Recently Viewed</ProfileTab>
            <ProfileTab onClick={() => router.push('/MyContributions')}>My Contributions</ProfileTab>
            <ProfileTab onClick={() => router.push('/FAQ')}>FAQ</ProfileTab>
            <ProfileTab onClick={() => router.push('/Help')}>Help</ProfileTab>
          </ProfileTabs>
        </StyledContainer>
          <Navbar
            navPages={['Home', 'Explore', 'Contribute', 'Profile']}
            activePage={'Profile'}
          />
    </>
  )
}

