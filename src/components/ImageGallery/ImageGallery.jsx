import PropTypes from 'prop-types';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import React, { Component } from 'react'
import { GalleryList } from "./ImageGallery.styled"


export  class ImageGallery extends Component {
    state = {
        showModal: false,
        large: null,
    }
    

  render() {
  
    return (

        <>
         <GalleryList className="gallery">
     {this.props.images.map(img => (
      
        <ImageGalleryItem  
        onClickImg ={this.props.onClickImg}
        key ={img.id}
        item = {img}
        id={img.id}
        />
        ) )}
       
    </GalleryList>


        </>
        
    )
  }
}

ImageGallery.propTypes = {
  onClickIMg: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};

