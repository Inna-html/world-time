// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { cityActions } from "../../../redux";


import { Countrie } from "../countrie/Countrie"; 
// import { CityService } from "../../../services/city.service";


const Countries = () => {

    const dispatch = useDispatch();
    const city = useSelector(state => state.city);
    console.log('state', city);


    // const {city} = useSelector(state => state.city);

    // const {city, error, loading} = useSelector(state => state.city);


    // работает для отобращения из стат
    // const [city, setCity] = useState(null);
    // useEffect(() => {
    //     CityService.getAll().then(({data}) => setCity(data))
    // }, [])
    // .

    


    // useEffect(() => {
    //     CityService.getAll().then(({data}) => setTimezone(data))
    // }, [])
    //

    // useEffect(() => {
    //     CityService.getAll().then(({data}) => setDatetime(data))
    // }, [])

    // useEffect(() => {
    //     CityService.getAll().then(({data}) => setDay_of_week(data))
    // }, [])



    // useEffect(() => {
    //     dispatch(cityActions.getAll())
    // }, [dispatch])

    if (city) 


return (
    <div>
        {/* {city && <Countrie key={city} city={city} />} */}
        {city && <Countrie key={city} city={city} />}
        {/* {datetime && <Countrie key={datetime} datetime={datetime} />}
        {day_of_week && <Countrie key={day_of_week} day_of_week={day_of_week} />} */}
    </div>
    )
}

export { Countries };

