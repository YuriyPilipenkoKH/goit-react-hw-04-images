import styled, {keyframes} from 'styled-components';

const scaling = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }

`   

export const Overlay  = styled.div`
    
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200; 
`

export const ModalImg  = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  transform: scale(0.9); 
  animation: ${scaling} 0.5s forwards;
`

 