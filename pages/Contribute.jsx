import React from 'react'
import ReactPlayer from 'react-player/youtube'

import styled from "styled-components"

import VideoPlayer from '../components/VideoPlayer'
import Button from '../components/Button'

const StyledContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 1.5em;
  background-color: #E5E5E5;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

export default function Contribute() {
  return (
    <StyledContainer>
      <h2>Contribute to Learning</h2>
      <VideoPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      <p>
        You can help other communities by contributing accurate translations (or
        relevant information) of different First Nation languages, particularly
        Basic, by filling out a form below. Also, there are initiatives to
        provide clean water to communities in need if you wish to donate.
      </p>

      <Button text={'Start here '} />

    </StyledContainer>
  )
}