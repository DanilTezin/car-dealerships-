import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import { getDealerById } from '../../api';
import Preloader from '../Preloader/Preloader'
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './personal.module.css'

function DealerPersonal() {

    const params = useParams();
    const prodId = params.id
    const [dealer, setDealer] = useState({})
    const [preloaderState, setPreloaderState] = useState(false)
    const [photoModal, setPhotoModal] = useState(false)

    useEffect(() => {

        getDealerById(prodId).then(data => {
            setDealer(data)
            setPreloaderState(true)
        })

    


    }, [prodId])


    return (
        <div>
            
            {
                photoModal ?
                    <div onClick={() => setPhotoModal(false)} className={style.wrapModal}>
                        <img className={style.modalImage} src={dealer.image} alt="" />
                    </div> : null
            }

            {
                preloaderState ?
                    <div className={style.content}>
                        <div className={style.wrapContent}>

                            <div className={style.imageInfo}>
                                <div onClick={() => setPhotoModal(true)} className={style.wrapLoupa}>
                                    <FontAwesomeIcon className={style.openModal} icon={faMagnifyingGlassPlus} />
                                </div>
                                <img src={dealer.image} alt="" />
                            </div>

                            <div className={style.dealerInfo}>
                                <div className={style.adressDealer}>
                                    Адрес:  
                                     
                                    <span>{dealer.adress}</span>

                                </div>
                                <div className={style.info}>
                                    <div className={style.nameDealer}>
                                        <span>Дилер - </span>{dealer.name}
                                    </div>

                                </div>
                                
                                <div className={style.more}>
                                    <span>Описание:</span>
                                    <p>{dealer.more}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    : <Preloader />
            }
        </div>

    )
}

export default DealerPersonal