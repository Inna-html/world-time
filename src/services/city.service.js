import { axiosService } from "./axios.service";

import { urls } from "../configs/urls";


const CityService = {
    getAll: () => axiosService.get(urls.city, {
        headers: { 'X-Api-Key': '9JGh/qRgwbbwpW+PnrjVMA==ASbNiS7Wz3xPMVsC'}
    })
}

export { CityService };

