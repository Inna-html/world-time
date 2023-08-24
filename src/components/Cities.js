import { useDispatch, useSelector } from "react-redux";
import { City } from "./City";
import { CityForm } from "./CityForm";
import css from './cities.module.css';
import { useEffect } from "react";
import { cityActions } from "../redux";

const Cities = () => {

    const dispatch = useDispatch();
    const {city, isLoading, errors} = useSelector(state => state.city);

    useEffect(() => {
        dispatch(cityActions.getAll())
    }, [])

    return (
        <div className={css.city}>
            <CityForm />
            
            {isLoading && <h2>Loading ... </h2>}
            {errors && <h2>Errors... </h2>}

            {city && <City key={city} city={city}/>}
        </div>
    )

}

export { Cities };