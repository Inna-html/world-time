import { axiosService } from "./axios.service";
import { urls } from "../configs/urls";



const CityService = {
    getAll: () => axiosService.get(urls.city),
    create: (city) => axiosService.post(urls.city(city)),
    updateByTimezone: (timezone, data) =>  axiosService.put(urls.byTimezone(timezone), data),
    deleteByTimezone: (timezone) => axiosService.delete(urls.byTimezone(timezone))
}

    
export { CityService };
   