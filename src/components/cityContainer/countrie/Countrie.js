// import { cityActions, cityReducer } from '../../redux';
//import { useSelector } from 'react-redux';
//import { CityForm } from '../cityForm/CityForm';
// import { CityService } from '../../services/city.service';



import { useDispatch } from 'react-redux';
import css from './countrie.module.css'
import { cityActions } from '../../../redux';


const Countrie = ({city}) => {

    const dispatch = useDispatch();

    //const {create} = useSelector(state => state.city)

    const {timezone, datetime, day_of_week} = city;


    return(
        <div className={css.countrie}>
            {/*<CityForm key={create} create={create} /> */}

            <h1>City: {timezone}</h1>
            <h4>Time and date: {datetime}</h4>
            <h4>Day of week: {day_of_week}</h4>
            <button onClick={()=>dispatch(cityActions.setCityForUpdate(city))}>update</button>
            <button onClick={()=>dispatch(cityActions.deleteCity({city}))}>delete</button>
        </div>
    )
}

export { Countrie };

