

const baseURL = 'https://api.api-ninjas.com/v1/worldtime?city='

let city = {'timezone' : 'paris'}

const urls = {
    city: `${encodeURIComponent(city)}`
    //'city'
}


export { baseURL, urls };
