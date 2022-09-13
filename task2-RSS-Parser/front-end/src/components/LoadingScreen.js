import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

     
export default function LoadingScreen() {
  return (
    <div style={divStyle}>
         <Spinner style={spinnerStyle} animation="grow" variant="primary" />
         <h2> Getting data ..</h2>
    </div>
  )
}

const spinnerStyle={
    width:'100px',
    height:'100px',


}

const divStyle={
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginTeft: '-50px',
    width: '100px',
    height: '100px',
}