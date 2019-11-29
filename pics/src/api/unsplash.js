import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID b21f7c6cf1f472381f90a5874ad62e529acb2af8e8a737eedd35089a57d17abd"
  }
});