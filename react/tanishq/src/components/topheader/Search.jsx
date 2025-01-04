import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
    return (
        <>
            <div className="col-8 col-sm-8 col-lg-7">
                <div className="search ps-3">
                    <div className='input-group'>
                        <input type="text" name="" id="" className='form-control' />
                        <button className='btn btn-primary input-group-text'>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
