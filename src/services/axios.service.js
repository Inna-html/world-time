import axios from "axios";
import { baseURL } from "../configs/urls";

const axiosService = axios.create({baseURL,
    headers: {
        "X-API-Key": '9JGh/qRgwbbwpW+PnrjVMA==ASbNiS7Wz3xPMVsC'
    }



    // добавила эти строки

//     body: JSON.stringify({
//         city: timezone,
//         date: date,
//         time: hour, minute, second,
//         day_of_week: day_of_week
//     }),

//     let resJson = await resizeBy.json(),


// contentType: 'application/json',
// success: function(result) {
//     console.log(result);
// },
// error: function ajaxError(jqXHR) {
//     console.error('Error: ', jqXHR.responseText);
// }

});


export { axiosService };
