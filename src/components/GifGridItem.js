import React from 'react';
import PropTypes from "prop-types";

export const GifGridItem = ({titulo, url}) => {
  return (
    <div className='card'>
      <img src={url} alt={titulo}></img>
      <p>{titulo}</p>
    </div>
  )
}

GifGridItem.propTypes = {
    titulo:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}
