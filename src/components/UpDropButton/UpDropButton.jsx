import React, { useEffect, useState } from 'react'
import style from './upbutton.module.css'

function UpDropButton() {

    const [visibleButton, setVisibleButton] = useState(false)
    const [startYOffset, setOffset] = useState(0)

    useEffect(() => {

            window.addEventListener('scroll', ()=> setVisibleButton(window.pageYOffset))

            
    }, [])
    


    return (
        <div onClick={()=>  window.scrollTo(0, 0)} className={style.wrapButton}>
            {visibleButton >= 200 ? 
                 <button className={style.upButton}><p className={style.ball}>🎈</p> </button>
                : null

            }
        </div>
    )
}

export default UpDropButton