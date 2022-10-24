import axios, { RawAxiosRequestHeaders } from 'axios';
import { API_URL } from './initProperties';

interface headersI {}

export const API = {
  post : async function (endPoint: string, input: Object) {        
    let headers: RawAxiosRequestHeaders = {};
    let token = localStorage.getItem("token");
    
    if(token !== null)
      headers.Authorization = `Bearer ${token}`;

    try {
      const response = await axios.post(API_URL + endPoint, input, { headers: headers });
      return response;
    } catch (error) {
      return error;
    }
},
}