import { useDispatch } from 'react-redux';
import { cityActions } from '../../redux';
import css from './countrie.module.css'


const Countrie = ({city}) => {

    const dispatch = useDispatch(city);

    const {timezone, date, hour, minute, second, day_of_week} = city;

   // const idCity = document.getElementById('idCity')

    return(
        <div className={css.countrie}>
                <h1>{timezone}</h1>
                <h4>Date: {date}</h4>
                <h4>Time: {hour} : {minute} : {second}</h4>
                <h4>Day of week: {day_of_week}</h4>

            <form>
                <input type='text' placeholder="input you city" id='idCity' />
                <button onClick={()=>dispatch(cityActions.getByCity(city))}> Sub </button>
            </form>
                    {console.log((city))}
        </div>
    )
}

export { Countrie };

