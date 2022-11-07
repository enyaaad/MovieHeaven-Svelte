// https://rapidapi.com/apidojo/api/imdb8
import axios from "axios";
require ('dotenv').config();

const params ={
};

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  headers: {
    'X-RapidAPI-Key': process.env.XRapidAPIKey,
    'X-RapidAPI-Host': process.env.XRapidAPIHost
  }
};

const axiosServiceApi = axios.create({
  baseURL:""
})
