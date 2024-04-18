import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className={props.class+' py-1 px-4 rounded font-semibold'}>{props.name}&nbsp;{props.icon}</button>
    </>
  )
}

export default Button