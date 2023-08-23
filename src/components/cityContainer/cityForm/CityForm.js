import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { cityActions } from "../../../redux";
// import { CityService } from "../../../services/city.service";
// import { Countrie } from "../countrie/Countrie";



const CityForm = () => {

    const {register, handleSubmit, setValue, reset} = useForm();
    const dispatch = useDispatch();

    const {cityForUpdate} = useSelector(state => state.city);
    if (cityForUpdate) {
       return  setValue('city', cityForUpdate.city)
    }
 


    const save = async (city) => { 
            await dispatch(cityActions.getAll(city))
                console.log(dispatch(cityActions.getAll(city), 'tetete'))
        //     if (res) {
        //         dispatch(cityActions.getAll(city))
        //     }
                reset();
        } 


    // const save = async (city) => { 
    //         const res = await dispatch(cityActions.setCityForUpdate(city))
    //             console.log(dispatch(cityActions.setCityForUpdate(city), 'tetete'))
    //         if (res) {
    //             dispatch(cityActions.getAll(city))
    //         }
    //             reset();
    //     } 


    // const save = async (city) => { 
    //         const res = await dispatch(cityActions.update(city)) 
    //             console.log(dispatch(cityActions.update(city)), 'tetete');  
    //             reset();
    //     } 

        // ПОМНЕНЯЛА НА UPDATE ИДУ В СЛАЙСЫ ДЕЛАТЬ UPDETE PEND

    // const save = async (city) => { 
    //         await dispatch(cityActions.update(city)) 
    //             if (city) {
    //                 console.log(dispatch(cityActions.update(city)), 'city');    
    //                 CityService.create('timezone')
    //                 console.log(CityService.create('timezone'));
    //             } reset()
    //         } 


// const idCity = document.getElementById('idCity');


    // const update = (city) => {
    //     dispatch(cityActions.update({city: cityForUpdate.city}))
    //     console.log(dispatch(cityActions.update({city: cityForUpdate.city})),  'diiiiiiiiiiis' );
    //     reset();
    // }


 //РАБОЧЕЕ 
    const update = async (city) => {
        const res = await dispatch(cityActions.update({city: cityForUpdate.city}))
        console.log(dispatch(cityActions.update({city: cityForUpdate.city})), 'hahahah');
        reset();
    }

   
    // const save = async (city) => { 
    //         await dispatch(cityActions.getAll(city)) 
    //         reset();
    //     }
        
// console.log(dispatch(cityActions.getAll()))



    return (
    
        <form onSubmit={handleSubmit(cityForUpdate ? update: save)}>
            <input id={'idCity'} type='text' placeholder={'timezoneOne'} {...register('timezoneOne')}/>
            <button onClick={e => dispatch(cityActions.getAll())}>saveveve</button>
            {/* <button>{cityForUpdate ? 'update' : 'save'}</button> */}
        </form>
    )
}

export { CityForm };
