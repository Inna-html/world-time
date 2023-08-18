import { useEffect, useState } from "react";
import { CityService } from "../../services/city.service";
import { Countrie } from "../countrie/Countrie";
import { useDispatch, useSelector } from "react-redux";
import { cityActions, cityReducer } from "../../redux";
import { useForm } from "react-hook-form";

const Countries = () => {
    
    const [city, setCity] = useState();
    
    const dispatch = useDispatch();

    //const {errors} = useSelector(state => state.cityReducer);

    const {reset} = useForm;

    useEffect(() => {
        CityService.getAll().then(({data}) => setCity(data));
    }, [])



const submit = async (data) => {
    if (cityActions) {
        await dispatch(CityService.updateByCity({city: setCity, city: data}))
    } else {
        await dispatch(CityService.create({city: data}))
    }
    reset();
};

    return (
        <form>

            <input type='text' placeholder="input you city"/>
            <button onClick={()=>submit}>sub</button>

            {city  && <Countrie key={city} city={city}/>}

        </form>
    )
}


export { Countries };

