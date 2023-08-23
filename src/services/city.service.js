import { axiosService } from "./axios.service";

import { urls } from "../configs/urls";


const CityService = {
    getAll: () => axiosService.get(urls.city),
    create: (data) => axiosService.get(urls.city, data),
    // updateByCity: (city, data) => axiosService.put(urls.city.byCity(city), data),
    // deleteByCity: (city) => axiosService.delete(urls.city.byCity(city))
       
    // .then(res => res.json()) // parse response as JSON
        // .then(data => {console.log(data)})
        // .catch(err => {console.log(`ERROR ${err}`)})
}

    
export { CityService };
   
