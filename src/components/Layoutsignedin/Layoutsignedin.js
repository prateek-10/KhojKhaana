import React from 'react'
import Headersignout from './Headersignout'
import Footersignedin from './Footersignedin'
const Layoutsignedin = ({children}) => {
  return (
    <>
      <Headersignout />
      <div>{children}</div>
      <Footersignedin />
    </>
  )
}

export default Layoutsignedin