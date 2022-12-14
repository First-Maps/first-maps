import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import Map from './Map'
import Button from './Button'

const StyledH5 = styled.h5`
  color: blue;
  size: 16pt;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: deepskyblue;
  }
`

const FormDiv = styled.div`
  max-width: 100%;
  margin: 1em 0;
  padding: 1em;
  background-color: white;
  border-radius: 1em;
  font-family: "Open Sans", sans-serif;

  @media (prefers-color-scheme: dark) {
    background-color: #2F2F2F;
  }
`

const Para = styled.p`
  margin-top: 0;
  font-family: "Open Sans", sans-serif;
`

const Select = styled.select`
  width: 100%;
  padding: 1em;
  border: 1px solid #707070;
  border-radius: 1em;
  background-color: white;
  font-family: "Open Sans", sans-serif;

  @media (prefers-color-scheme: dark) {
    background-color: #2F2F2F;
  }
`

const Input = styled.input`
  width: 100%;
  min-height: 3em;
  border: 1px solid #707070;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-family: "Open Sans", sans-serif;
`

const Textarea = styled.textarea`
  min-width: 100%;
  height: 10em;
  border: 1px solid #707070;
  border-radius: 0.5em;
  padding: 1em;
  resize: none;
  font-family: "Open Sans", sans-serif;
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

  const [images, setImages] = useState()

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    category: '',
    coordinates: []
  })

  const [formError, setFormError] = useState({
    name: false,
    description: false,
    category: false,
    coordinates: false,
    images: false,
  })

  function handleFormChange(e) {
    const { name, value } = e.target

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  function handleImageChange(e) {
    const files = e.target.files
    if (files > 5) {
      setFormError({
        ...formError,
        images: true
      })
      e.target.files = null
      return
    }
    setImages(files)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    console.log('submitting form')

    if (
      formValues.name === ''
      || formValues.description === ''
      || formValues.category === ''
      || !Array.isArray(formValues.coordinates)
      || formValues.coordinates.length !== 2
      || (images && images.length > 5)
    ) {
      const coordinatesGood = (
        Array.isArray(formValues.coordinates) 
        && formValues.coordinates.length === 2
      )

      let imagesGood = true
      if (!images) {
        imagesGood = false
      } else {
        imagesGood = images.length <= 5
      }

      setFormError({
        name: formValues.name ? false : true,
        description: formValues.description ? false : true,
        category: formValues.category ? false : true,
        coordinates: !coordinatesGood,
        images: !imagesGood,
      })

      return
    }

    e.target.closest('button').disabled = true

    const formData = new FormData()
    formData.append('name', formValues.name)
    formData.append('description', formValues.description)
    formData.append('category', formValues.category)
    formData.append('coordinates', formValues.coordinates)
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i])
      }
    }

    try {
      const response = await axios.post('/api/contribute', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      router.push('/')
    } catch (error) {
      console.log(error)
    }
  } 


  return (
    <>
      <h3>{heading}</h3>

      <StyledH5>Choose a point on the map</StyledH5>

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
              <option value="history">History</option>
              <option value="language">Language</option>
              <option value="arts">Arts</option>
              <option value="culture">Culture</option>
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

        <FormDiv>
          <label>
            <Para>Upload images</Para>
            <Input 
              type="file" 
              name="image" 
              onChange={handleImageChange}
              accept="image/*"
              multiple
            />
          </label>
          {formError.images && <ErrorPara>You can&apos;t upload more than 5 images</ErrorPara>}
        </FormDiv>

        <Button text="Submit" active={true} onClick={handleSubmit} />
      </form>
    </>
  )
}
