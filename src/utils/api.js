import axios from 'axios';
import keys from '../config/keys';

function handleError(error){
  console.log(error);
  return null;
}

export default {
  getFiveDayForcast: (location)=>{
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${keys.key}`)
                .then((response)=>{
                  return response;
                })
                .catch(handleError)
  },
  getCurrentWeather: ()=>{

  }
}