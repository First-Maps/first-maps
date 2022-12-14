
import React from 'react'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Head from 'next/head'
import styled from "styled-components"
import { Navbar } from '../components/Navbar/Navbar'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import { useRouter } from "next/router";

const StyledContainer = styled.div`
  max-height: calc(100vh - 60px - 58px);
  min-height: calc(100vh - 60px - 58px);
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #F2F2F2;
  overflow-y: scroll;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    height: 100vh;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    padding-bottom: 75px;
    scrollbar-width: none;
    padding: 2em;
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
  max-height: 47vh;
  @media (min-width: 768px) {
    max-height: 100vh;
    max-width: 768px;
  }
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
  background-color: #FFFFFF;
  border-radius: 1em;
  margin: 1em 0;
  @media (prefers-color-scheme: dark) {
    background-color: #2B2A33;
  }
  
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
  const router = useRouter(); //get a router obj from library after u imported, includes routing stuff like going to new pages
  
  const { user } = props;
  return (
    <>
      <Head>
        <title>Profile | First Maps</title>
        <meta name="description" content="First Maps: Profile" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>
      <StyledContainer>
        <ProfileHeader 
          profilePicture={user.image} // temporary
          profileName={user.email}// temporary
        />
        <ProfileTabs>
          {/* <ProfileTab onClick={() => router.push('/RecentlyViewed')}>Recently Viewed</ProfileTab> */}
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

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  } 

  let user = session.user;

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  }
}