import { axiosService } from "./axios.service";
import { urls } from "../configs/urls";



const CityService = {
    getAll: () => axiosService.get(urls.city),
    create: (data) => axiosService.post(urls.city.base, data),
    updateByTimezone: (timezone, data) =>  axiosService.put(urls.byTimezone(timezone), data),
    deleteByTimezone: (timezone) => axiosService.delete(urls.byTimezone(timezone))
}

    
export { CityService };
   
