import styled from 'styled-components';

export const TopBtn = styled.button`
display: none;

 position: fixed;
 bottom: 40px;
 right: 40px;
 width: 70px;
 height: 70px;

 align-items: center;
 justify-content: center;
 padding: 12px;
 background-color: var(--green);
 border-radius: 10px;
 border: transparent;
 cursor: pointer;
 outline: none;
  box-shadow: var(--shadow-four);
  transition: all 0.4s ease;

 &.visible {
  display: flex;
 }

  &:hover,
  &:focus{
    color: #888;
    background-color: var(--bright-green);
    box-shadow: var(--shadow-two);
   
    & >svg {
    fill: #888;
    }
}
`