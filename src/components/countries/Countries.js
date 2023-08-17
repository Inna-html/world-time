import { useEffect, useState } from "react";
import { CityService } from "../../services/city.service";
import { Countrie } from "../countrie/Countrie";

const Countries = () => {

    const [city, setCity] = useState();

    useEffect(() => {
        CityService.getAll().then(({data}) => setCity(data))
    }, [])

    return (
        <form>
            {city  && <Countrie key={city} city={city}/>}
        </form>
    )
}

export { Countries };

