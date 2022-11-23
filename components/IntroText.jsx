import React from 'react'
import styled from "styled-components"
import { useState, useNavigate } from 'react'

const FormDiv = styled.div`
  max-width: 100%;
  margin: 1em 0;
  padding: 1em;
  
  position: relative;
  left: 0; right: 0; bottom: 0;
  padding: 3px 8px;
  z-index: 1;
`

const Title = styled.p`
  font-weight: 600px;
`

const Para = styled.p`
  margin-top: 0;
`

export default function IntroText() {
    return (
        <>
        <FormDiv>
            <Title>🍁 Welcome to FirstMaps!</Title>
        </FormDiv>

        <FormDiv>
            <Para>Description</Para>
        </FormDiv>
        </>
    )
}