import styled from 'styled-components';
import reactIcon from "../../utils/react.svg"

export const Header = styled.header`
    top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: transparent;

`

export const SearchForm = styled.form`
    
    display: flex;

    gap: 8px;

    & >input{
        min-width: 300px;
        outline: none;
        padding: 12px;
        font-size: 18px;
        border-radius: 8px;
        border: 3px solid transparent;
        box-shadow: var(--shadow-four);

        background-image: url(${reactIcon});
        background-size: contain;
        background-position: right center;
        background-repeat: no-repeat;

        &:focus {
           border-color: var(--orange);
        }
    }
`