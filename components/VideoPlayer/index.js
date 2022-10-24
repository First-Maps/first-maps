import dynamic from "next/dynamic"

const VideoPlayer = dynamic(() => import("./VideoPlayer"), {
  ssr: false,
})

export default VideoPlayer
