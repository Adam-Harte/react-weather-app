import axios from 'axios';

const instance = axios.create({
   // use APPID= query with api key to make requests
   baseURL: 'http://api.openweathermap.org/data/2.5/weather'
});

export default instance;