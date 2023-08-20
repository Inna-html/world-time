import { useEffect, useState } from "react";

import { CityService } from "../../services/city.service";
import { useDispatch, /*useSelector*/ } from "react-redux";
// import { cityActions } from "../../redux";
import { Countrie } from "../countrie/Countrie";
// import { Errors } from "../errors/Errors";


const Countries = () => {
   
    const [city, setCity] = useState();

    const dispatch = useDispatch();
    //const {city, error, loading, cityFromAPI} = useSelector(state => state.cityReducer);

    useEffect(() => {
        CityService.getAll().then(({data}) => setCity(data));
        //dispatch(cityActions.getAll())
    }, [dispatch])



return (
    <div>

        {/*loading && <h4>Loaging...</h4>}
        {error && <Errors key={error} errors={error} />}
        {cityFromAPI && <h4> cityFromAPI </h4>*/}

        {city && <Countrie key={city} city={city} />}
        
    </div>
    );
}

export { Countries };

