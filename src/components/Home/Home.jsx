import React from 'react'
import { Link } from 'react-router-dom'
import style from './home.module.css'

function Home() {
  return (
    <div className={style.content}>
        <Link to="/dealers" className={style.dealersButton}>
            Диллеры
        </Link>
    </div>
  )
}

export default Home