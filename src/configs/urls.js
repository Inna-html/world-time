
const baseURL = 'https://api.api-ninjas.com/v1/worldtime?city=';

const urls = {
    city: (city) => `${baseURL}${encodeURIComponent(city)}`,
    byTimezone: (timezone) => `${timezone}`

}

export { baseURL, urls };

