import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function VideoPlayer({
  url
}) {
  return (
    <ReactPlayer url={url} width={'auto'} height={'auto'} controls={true} />
  )
}