import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled'


const modalRoot = document.querySelector('#modal-root')
export  class Modal extends Component {
    // state = {
    //     showModal: this.props.showModal,
        
    // }

    componentDidMount() {
       
        window.addEventListener('click', this.handleBackdropClick)
        window.addEventListener('keydown', this.handleKeyDown)
        document.body.style.overflow = 'hidden';
      } 

      componentWillUnmount() {
       
        window.removeEventListener('click', this.handleBackdropClick)
        window.removeEventListener('keydown', this.handleKeyDown)
        document.body.style.overflow = 'unset';
      } 
    
      handleBackdropClick =(e) => {
      
        if( e.target === e.currentTarget ){
          return this.props.onModalClose()   
           }
      }


      handleKeyDown =(e) => {
          if(e.keyCode === 27  ){
            return this.props.onModalClose()   
             }
        }
      


  render() {
    return createPortal (
        <Overlay onClick  ={this.handleBackdropClick} className="overlay">
        <ModalImg className="modal">
            <img src={this.props.picture} alt="#" />
        </ModalImg>
        </Overlay>
      ,modalRoot
    )
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  picture:  PropTypes.string.isRequired,
}
