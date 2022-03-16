import React from 'react'
import preloader from '../../picture/Preloader.gif'

function Preloader() {
  return (
    <div style={{display : "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "40vh"
                }}>
        <img style={{marginTop: "calc(400px - 10vw)", borderRadius: "50%"}} src={preloader} alt="" />
    </div>
  )
}

export default Preloader