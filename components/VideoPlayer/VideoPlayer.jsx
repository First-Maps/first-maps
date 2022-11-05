import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function VideoPlayer({
  url
}) {
  return (
    <ReactPlayer url={url} width={'331.67px'} height={'230px'} controls={true} />
  )
}