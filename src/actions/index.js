import axios from 'axios';
const API_KEY='b6907d289e10d714a6e88b30761fae22';
const ROOT_URL ='http://api.openweathermap.org/data/2.5/forecast?appid=9bc83fd31c8cb8bfd393b99ac0629e3e';

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city){
	const url = ROOT_URL+'&q='+city+',us';
	const request = axios.get(url);
	//console.log('request', request);
	return{
		type:FETCH_WEATHER,
		payload: request
	}
}