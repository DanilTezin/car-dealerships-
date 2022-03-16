import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getDealers } from '../../api';
import DealersCard from '../DealersCard/DealersCard';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import UpDropButton from '../UpDropButton/UpDropButton';
import style from './dealerList.module.css'

function DealerList({ dealers }) {

    const [params] = useSearchParams()
    const [preloaderState, setPreloaderState] = useState(false)
    const byName = (name) => name.toLowerCase().includes((params.get('name') || '').toLocaleLowerCase());

    useEffect(() => {

        getDealers().then(data => {
            setPreloaderState(true)
        })

    }, [])

    return (
        <>
            <Search />

            <UpDropButton/>

            {preloaderState ? <div className={style.content}>

                {
                    dealers.filter((e) => byName(e.name)).length > 0 ?

                    dealers.filter((e) => byName(e.name)).map((dealer) => {
                        return <DealersCard name={dealer.name}
                            key={dealer.id}
                            adress={dealer.adress}
                            image={dealer.image}
                            id={dealer.id}
                        />
                    }
                    ) : <PageNotFound/>
                }
            </div> : <Preloader />}

        </>
    )

}

export default DealerList