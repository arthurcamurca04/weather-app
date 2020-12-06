import axios from 'axios';

const api = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

export default api;

// http://api.openweathermap.org/data/2.5/weather?q=Pianc%C3%B3&appid=22fa3512095c99b619c0cc3ec6c838ce&units=metric&lang=pt_br