import React from 'react'
import styled from "styled-components"
import { useState, useNavigate } from 'react'
import axios from 'axios'

import Map from './Map'
import Button from './Button'

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

export default function ContributeForm({
  heading="Contribute",
  inputPlaceholder = 'Enter text...',
  handleContributePageChange,
  ...props
}) {
  const [newLocation, setNewLocation] = useState(null)

  function handleMapClick(latlng) {
    setNewLocation([latlng.lng, latlng.lat])
    setFormValues({
      ...formValues,
      coordinates: [latlng.lng, latlng.lat]
    })
  }

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    category: '',
    coordinates: [],
  })

  function handleFormChange(e) {
    const { name, value } = e.target
    console.log(name, value)
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await axios.post('/api/contribute', formValues)

    // redirect to the home page
    navigate('/', {replace: true});
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
      <Map allowAddingMarkers={true} handleMapClick={handleMapClick} newMarkerPosition={newLocation} />
      {newLocation && (<p>New location: {newLocation.join(', ')}</p>)}


      <form>
      <FormDiv>
          <label>
            <Para>Type of location</Para>
            <Select type="text" name="category" placeholder={inputPlaceholder} onChange={handleFormChange} >
              <option value="">--Please choose an option--</option>
              <option value='culture'>Culture</option>
              <option value="language">Language</option>
            </Select>
          </label>
        </FormDiv>

        <FormDiv>
          <label>
            <Para>Title</Para>
            <Input type="text" name="name" placeholder={inputPlaceholder} onChange={handleFormChange} />
          </label>
        </FormDiv>

        <FormDiv>
          <label>
            <Para>Description</Para>
            <Textarea name="description" placeholder={inputPlaceholder} onChange={handleFormChange} />
          </label>
        </FormDiv>

        <Button text="Submit" active={true} onClick={handleSubmit} />
      </form>
    </>
  );
}