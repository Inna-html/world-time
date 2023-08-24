
const City = ({city}) => {

    const {timezone, datetime, day_of_week} = city;

    return (
        <div>
            <h1>City: {timezone}</h1>
            <h4>Date and time: {datetime}</h4>
            <h4>Day of week: {day_of_week}</h4>
        </div>
    )
}

export { City };