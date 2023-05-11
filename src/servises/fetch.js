import axios from 'axios';

// const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
const API_KEY = '36116810-1d3bc75af19137f2942c13110';

const BASE_URL = 'https://pixabay.com/api';

export  async function fetchCard(query,page,perPage) {
 
        const params = new URLSearchParams({
            key: API_KEY,  
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: perPage,
        });

      const response = await axios.get(`${BASE_URL}/?${params}`);
  
      return response.data.hits
 
   
}