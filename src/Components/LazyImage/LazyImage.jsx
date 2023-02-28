import React from 'react'

const LazyImage = ({src, alt, className, children}) => {
  return (
    <>
    <img src={src} alt={alt} className={className} />
    {children}
    </>
  )
}

export default LazyImage