import React from "react";
import Loader from '../../public/images/ezgif.com-gif-maker.avif';
import './PreLoader.css'

const PreLoader = () => {
    return (
    <div id="body-loading">
       <img src={Loader} className='loader-img' alt="loader" />
    </div>
)
}

export default PreLoader