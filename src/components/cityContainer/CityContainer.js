import { useSelector } from "react-redux";

import { CityForm } from "./cityForm/CityForm"; 
import { Countries } from "./countries/Countries"; 


const CityContainer = () => {


    const {loading, error} = useSelector(state => state.city)


    return (
        <div>
            <CityForm />

            {loading && <h4> Loading... </h4>}

            <Countries />

            {error && <h4> {JSON.stringify(error)} </h4>}
        </div>
    )
}

export { CityContainer };


