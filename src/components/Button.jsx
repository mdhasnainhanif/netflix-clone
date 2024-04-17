import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className={props.class+' py-2 px-4 rounded'}>{props.name}</button>
    </>
  )
}

export default Button