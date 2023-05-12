import PropTypes from 'prop-types';
import  ImageGalleryItem  from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryList } from "./ImageGallery.styled"


const ImageGallery = ({onClickImg,images}) =>{


  
    return (

        <>
         <GalleryList className="gallery">
     {images.map(img => (
      
        <ImageGalleryItem  
        onClickImg ={onClickImg}
        key ={img.id}
        item = {img}
        id={img.id}
        />
        ) )}
       
    </GalleryList>


        </>
        
    )
  }
export default ImageGallery

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

