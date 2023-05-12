
import PropTypes from 'prop-types';
import { GalleryItem } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({onClickImg,item}) => {

    const {id, webformatURL, largeImageURL}  = item
    return (
        <GalleryItem key ={id} className="gallery-item">
        <img
        onClick = {() => onClickImg(largeImageURL)}
         id ={id} 
        src={webformatURL} 
        alt={largeImageURL} 
       />
        </GalleryItem>
    )
}
export default ImageGalleryItem

ImageGalleryItem.propTypes = {
  onClickImg: PropTypes.func,

  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  })
 
};

  