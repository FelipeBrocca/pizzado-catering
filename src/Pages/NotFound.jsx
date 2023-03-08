import React from 'react'
import { Link } from 'react-router-dom'
import image404 from '../public/images/error404.webp'


const NotFound = () => {
  return (
    <main>
      <div className='not-found-main'>
        <img src={image404} alt='404' />
        <h2>Error 404!</h2>
        <p>Parece que esta página no existe, volvé a navegar con nosotros aquí <Link to='/'>Home</Link></p>
      </div>
    </main>
  )

}

export default NotFound