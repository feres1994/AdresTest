import axios from 'axios'

function API({
    url,
    data,
    method,
    params,
  
  }) {
   

    const headers = {
      
        Accept: "application/json",
        "Content-Type": "application/json",      
      };
    
    if (params && (method === "get")) {    }
    const request = axios({
      method,
      url ,
      data,
      params,
      headers,

     
    });
    return request;
  }
  
  export default API;