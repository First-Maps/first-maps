import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Map from './Map'
import Button from './Button'

const FormDiv = styled.div`
  max-width: 100%;
  margin: 1em 0;
  padding: 1em;
  background-color: white;
  border-radius: 1em;

  @media (prefers-color-scheme: dark) {
    background-color: #2F2F2F;
  }
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

  @media (prefers-color-scheme: dark) {
    background-color: #2F2F2F;
  }
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

const ErrorPara = styled.p`
  color: red;
  margin: 0;
`

export default function ContributeForm({
  heading="Contribute",
  inputPlaceholder = 'Enter text...',
  handleContributePageChange,
  ...props
}) {
  const [newLocation, setNewLocation] = useState(null)

  // used for redirecting after location submission
  let router = useRouter()


  function handleMapClick(latlng) {
    // map expects latitude-first
    setNewLocation([latlng.lat, latlng.lng])
    setFormValues({
      ...formValues,
      // database expects longitude-first
      coordinates: [latlng.lng, latlng.lat]
    })
  }

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    category: '',
    coordinates: [],
  })

  const [formError, setFormError] = useState({
    name: false,
    description: false,
    category: false,
    coordinates: false,
  })

  function handleFormChange(e) {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (
      formValues.name === ''
      || formValues.description === ''
      || formValues.category === ''
      || !Array.isArray(formValues.coordinates)
      || formValues.coordinates.length !== 2
    ) {
      const coordinatesGood = (
        Array.isArray(formValues.coordinates) 
        && formValues.coordinates.length === 2
      )

      setFormError({
        name: formValues.name ? false : true,
        description: formValues.description ? false : true,
        category: formValues.category ? false : true,
        coordinates: coordinatesGood ? false : true,
      })

      return
    }

    const res = await axios.post('/api/contribute', formValues)
    // redirect to the home page
    router.push('/') // navigate('/', {replace: true}) 
  } 


  return (
    <>
      <h3>{heading}</h3>

      <p>
        You can help other communities by contributing accurate translations (or
        relevant information) of different First Nation languages, particularly
        Basic, by filling out a form below. Also, there are initiatives to
        provide clean water to communities in need if you wish to donate.
      </p>

      <h5>Choose a point on the map</h5>
      <Map
        allowAddingMarkers={true}
        handleMapClick={handleMapClick}
        newMarkerPosition={newLocation}
      />
      {newLocation && <p>New location: {newLocation[1]}, {newLocation[0]}</p>}
      {formError.coordinates && <ErrorPara>
        Please pick a location on the map
      </ErrorPara>}

      <form>
        <FormDiv>
          <label>
            <Para>Type of location</Para>
            <Select
              type="text"
              name="category"
              placeholder={inputPlaceholder}
              onChange={handleFormChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="culture">Culture</option>
              <option value="language">Language</option>
            </Select>
          </label>
          {formError.category && <ErrorPara>A category is required</ErrorPara>}
        </FormDiv>

        <FormDiv>
          <label>
            <Para>Title</Para>
            <Input
              type="text"
              name="name"
              placeholder={inputPlaceholder}
              onChange={handleFormChange}
              required
            />
          </label>
          {formError.name && <ErrorPara>A name is required</ErrorPara>}
        </FormDiv>

        <FormDiv>
          <label>
            <Para>Description</Para>
            <Textarea
              name="description"
              placeholder={inputPlaceholder}
              onChange={handleFormChange}
              required
            />
          </label>
          {formError.description && <ErrorPara>A description is required</ErrorPara>}
        </FormDiv>

        <Button text="Submit" active={true} onClick={handleSubmit} />
      </form>
    </>
  )
}
