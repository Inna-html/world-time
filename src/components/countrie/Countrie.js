import css from './countrie.module.css';


const Countrie = ({city}) => {
    const {timezone, date, hour, minute, second, day_of_week} = city;

    return(

        <div className={css.countrie}>
            <input type='text' placeholder="input you city"/>
            
            <h1>{timezone}</h1>
            <h4>Date: {date}</h4>
            <h4>Time: {hour} : {minute} : {second}</h4>
            <h4>Day of week: {day_of_week}</h4>
        </div>
    )
}

export { Countrie };


