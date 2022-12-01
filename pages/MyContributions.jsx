
import { Navbar } from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import Header from '../components/Header/Header'
import React, { useState } from 'react'
import Head from 'next/head'
import styled from "styled-components"
import ExploreLanguages from '../components/ExplorePages/ExploreLanguages'
import Bodytext from '../components/BodyText/Bodytext'
import ItemBox from '../components/ItemBox/ItemBox'
import VideoPlayer from '../components/VideoPlayer'
import { useEffect } from 'react'
import router from 'next/router'

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
    height: 100vh;
  }
  .p {
    font-family: 'Fira Sans', sans-serif !important;
  }
  @media (prefers-color-scheme: dark) {
    background-color: #1F1F1F;
    color: #FFFFFF;
  }
`
export default function MyContributions({
  ...props
}) {
  const [allPages, setAllPages] = useState(true)
  const [currentPage, setCurrentPage] = useState({})
  const [pages, setPages] = useState([])

  // aysnc functuion to fetch the data from the database
  const fetchPages = async () => {
    const res = await fetch('/api/devLocationsOfInterest')
    const data = await res.json()
    const usersPages = data.results.filter(page => page.userEmail === props.user.email)
    setPages(usersPages)
  }

  useEffect(() => {
    fetchPages()
  }, [])

  return (
    <>
      <Head>
        <title>My Cotnributions | First Maps</title>
        <meta name="description" content="First Maps: My Contributions" />
        <link rel="icon" href="/location-dot-solid.svg" />
      </Head>
      <StyledContainer>
        <Header
          label="My Contributions"
          text='↽ Back to Profile'
          dir="column-reverse"
          ali="flex-start"
          padl="0"  
          onClick={() => router.push('/profile')}
        />
        <br />
        {allPages ?
          pages.map((page) => (
            <ItemBox
              key={page.id}
              label={page.name}
              img={page.images[0].imageLink}
              width="331.67px"
              height="230px"
              onClick={() => {
                setCurrentPage(page)
                setAllPages(false)
              }}
            />
          )) :
          (
            <div>
              <Header
                label={currentPage.name}
                text='↽ Back to My Contributions'
                dir="column-reverse"
                ali="flex-start"
                padl="0"
                onClick={() => {
                  setAllPages(true)
                }}

              />
              
              <ItemBox
                label={currentPage.name}
                img={currentPage.images[0].imageLink}
                width="331.67px"
                height="230px"
              />
              <Bodytext
                label={currentPage.description}
              />
            </div>
          )
        }
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