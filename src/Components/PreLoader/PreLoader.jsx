import React from "react";
import { useContext } from "react";
import { LoadingContext } from "../../Context/LoadingContext";
import Loader from '../../public/images/pizza.svg';
import './PreLoader.css'

const PreLoader = () => {

    const {loading} = useContext(LoadingContext)

    return (
    <div id="body-loading" className={loading ? 'body-loading' : 'body-loaded'}>
       <img src={Loader} className='loader-img' alt="loader" />
    </div>
)
}

export default PreLoader