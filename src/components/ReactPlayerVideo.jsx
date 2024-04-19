import React from 'react'
import ReactPlayer from 'react-player'



const ReactPlayerVideo = (props) => {
  return (
    <>
        <ReactPlayer width={props.width} height={props.height} className={props.classes} url={props.url}/>
    </>
  )
}

export default ReactPlayerVideo