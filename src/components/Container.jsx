import React from 'react'

const Container = ({children, className=''}) => {
  return (
    <div className={`customContainer ${className}`}>{children}</div>
  )
}

export default Container