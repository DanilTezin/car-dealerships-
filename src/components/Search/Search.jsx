import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './search.module.css'

function Search() {

    
    const [searchValue, setSearchValue] = useState('')
    let navigate = useNavigate()

                        
    const handleSearch = (event) => {

        setSearchValue(event.target.value)
        
        event.target.value === '' 
            ? navigate('/dealers') 
            : navigate(`?name=${event.target.value}`)
        

    }




    return (
        <div className={style.wrapContent}>

            <input  className={style.search} 
                    value={searchValue} 
                    onChange={handleSearch} 
                    placeholder="Поиск..." 
                    type="text" 
            />
        </div>
    )

}

export default Search