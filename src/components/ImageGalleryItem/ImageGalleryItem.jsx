import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled'

export  class ImageGalleryItem extends Component {

  render() {
    const {id, webformatURL, largeImageURL}  = this.props.item
    return (
        <GalleryItem key ={id} className="gallery-item">
        <img
        onClick = {() => this.props.onClickImg(largeImageURL)}
         id ={id} 
        src={webformatURL} 
        alt={largeImageURL} 
       />
        </GalleryItem>
    )
  }
}

ImageGalleryItem.propTypes = {
  onClickImg: PropTypes.func,
  id: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  })
 
};

  