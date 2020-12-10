import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    Authorization: 'Client-ID n9iNQO7uOiVaOtkxP8DG_krmwNPERYVHZQMALLgD9oc'
  }
});