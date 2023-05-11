import styled from 'styled-components';


export const GalleryItem = styled.li`
     min-width: 320px;
    flex-basis: calc((100% - 80px) / 4);
    border: 2px solid #f1eeee;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.4s;
    
    & > img {
    display: block;
    height: 30vh;
    object-fit: cover;
    }

    &:hover {
    transform: scale(1.03);
    outline: none;
    }
`