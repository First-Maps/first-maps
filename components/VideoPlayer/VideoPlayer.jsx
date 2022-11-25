import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer({
  url
}) {
  return (
    <ReactPlayer url={url} width={'330px'} height={'230px'} controls={true} />
  )
}