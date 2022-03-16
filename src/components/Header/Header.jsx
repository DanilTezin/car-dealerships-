import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import { faHome, faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Header() {

  const [opacityHeader, setOpacityHeader] = useState()
  

  useEffect(() => {
    window.addEventListener('scroll', ()=> setOpacityHeader(window.pageYOffset))
  }, [])



  return (
    <div style={{opacity: opacityHeader >= 150 ? "0.8" : "1" }} className={style.content}>
      <div className={style.linki}>
        <Link className={style.home} to="/"><FontAwesomeIcon icon={faHome} />Главная</Link>
        <Link className={style.links} to="/dealers"><FontAwesomeIcon className={style.carIcon} icon={faCarAlt} />Список дилеров</Link>
      </div>
       
      <div className={style.logo}>🚗OrenDealers💨</div>
      <a className={style.info} href="https://github.com/DanilTezin" target="_blank" rel="noopener noreferrer">?</a>
    </div>
  )
}

export default Header