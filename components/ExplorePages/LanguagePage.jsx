import styled from 'styled-components'
import Header from '../Header/Header'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import React from 'react'
import BodyText from '../BodyText/Bodytext'
import { text } from 'express'
import ItemBox from '../ItemBox/ItemBox'

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

export default function LanguagePage({
  label
}) {
    return (
        <>

            <StyledContainer>
                <Header
                    label='Western Albenaki (Algonquin)'
                    text='↽ Back to Explore'
                    dir="column-reverse"
                    ali="flex-start"
                    padl="0"
                />
                {/* <VideoPlayer
                    url={'https://www.youtube.com/watch?v=YspD--5nMEI'}
                /> */}
                <ItemBox
                  label='test'
                  width= "331.67px"
                  height= "230px"
                />

                {/* <BodyText>{label}</BodyText> */}
            </StyledContainer>
            {/* <Navbar
          navPages={['Home', 'Explore', 'Contribute', 'Profile']}
          activePage={'Explore'}
        /> */}
        </>
    )
}