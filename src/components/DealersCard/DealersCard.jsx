import React from 'react'
import { Link } from 'react-router-dom'
import style from './dealersCard.module.css'

function DealersCard(props) {
        
    return (

        <div className={style.content}>
            <div className={style.wrapContent}>
                <div className={style.imageInfo}>
                    <img src={props.image} alt="" />
                </div>

                <div className={style.dealerInfo}>

                    <Link to={`/dealers/${props.id}`} className={style.moreButton}>Смотреть</Link>
                    <div className={style.info}>
                        <div className={style.nameDealer}>{props.name}</div>
                        <div className={style.adressDealer}>{props.adress}</div>
                    </div>
                    {props.description}

                    

                </div>
            </div>
        </div>

    )
}

export default DealersCard