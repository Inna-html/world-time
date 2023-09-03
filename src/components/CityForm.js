import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { cityActions } from "../redux";

const CityForm = () => {

    const {handleSubmit, reset, register} = useForm();
    const dispatch = useDispatch();



    const save = async (city) => {
        if ({city}) {
            // await dispatch(cityActions.create(city))
            await dispatch(cityActions.getAll({city})) 
        }
        
        reset();
        console.log(dispatch(cityActions.create(city)), 'dispatchCreate');
        console.log(dispatch(cityActions.getAll(city)), 'dispatchGetAll');
        console.log(city, 'city');
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'City'} {...register('city')}/>
            <button> add </button>
        </form>
    )
}



export { CityForm };

