import React from 'react'
import styled from "styled-components"
import { useState, useNavigate } from 'react'

const FormDiv = styled.div`
  max-width: 100%;
  margin: 1em 0;
  padding: 1em;
  background-color: white;
  border-radius: 1em;
`

const Para = styled.p`
  margin-top: 0;
`

const Select = styled.select`
  width: 100%;
  padding: 1em;
  border: 1px solid #707070;
  border-radius: 1em;
  background-color: white;
`

const Input = styled.input`
  width: 100%;
  height: 2.5em;
  border: 1px solid #707070;
  border-radius: 0.5em;
  padding: 0.5em 1em;
`

const Textarea = styled.textarea`
  min-width: 100%;
  height: 10em;
  border: 1px solid #707070;
  border-radius: 0.5em;
  padding: 1em;
  resize: none;
`

export default function ArtForm() {
    return (
        <>
        <FormDiv>
          <label> 
            <Para>
              {formValues.category[0].toUpperCase() + formValues.category.slice(1)}
            </Para> 
            <Input type="text" name="name" placeholder={inputPlaceholder} onChange={handleFormChange} />
          </label>
        </FormDiv>

        <FormDiv>
          <label>
            <Para>Description</Para>
            <Textarea name="description" placeholder={inputPlaceholder} onChange={handleFormChange} />
          </label>
        </FormDiv>
        </>
    )
}