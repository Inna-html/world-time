
const baseURL = 'https://api.api-ninjas.com/v1/worldtime?city=';

let city = 'berlin'

const urls = {
    city: city,
    byTimezone: (timezone) => `${timezone}`

    // city: {
    //     base: city,
    //     
    // }
}


// city: `${encodeURIComponent(city)}`




export { baseURL, urls };

