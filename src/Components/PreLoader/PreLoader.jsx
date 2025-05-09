import React from "react";
import { useContext } from "react";
import { LoadingContext } from "../../Context/LoadingContext";
import Loader from '../../public/images/logo-sin-descripcion.webp';
import './PreLoader.css'

const PreLoader = () => {

    const {loading} = useContext(LoadingContext)
    

    return (
    <div id="body-loading animation" 
    className={loading ? 'body-loading' : 'body-loaded'}
    >
            <div id='animation'>
                {/* <span className='parallax-text' text='PIZZADO'>
                    PIZZADO
                </span> */}
                <img src={Loader} 
                className={loading ? 'loader-img' : 'img-loaded'}
                alt="loader" />
            </div>
        </div>
)
}


export default PreLoader