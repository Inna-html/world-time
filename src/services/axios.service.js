import axios from "axios";

import { baseURL } from "../configs/urls";


const axiosService = axios.create({baseURL,
    headers: {"X-API-Key": '9JGh/qRgwbbwpW+PnrjVMA==ASbNiS7Wz3xPMVsC'},
    method: 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
    contentType: 'text/plain',
    // success: function(result) {console.log(result);},
    // error: function error(response) {console.error('Error: ', response);}
    
    // contentType: 'aplication/json'
});



export { axiosService };

