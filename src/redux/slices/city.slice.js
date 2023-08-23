import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isFulfilled, isRejected, isPending } from "@reduxjs/toolkit";

import { CityService } from "../../services/city.service";


const initialState = {
    city: {},
    error: null,
    loading: null,
    cityForUpdate: null
}

const getAll = createAsyncThunk(
    'citySlice/getAll',
    async (_, thunkAPI /*{rejectWithValue, dispatch, getState}*/) => {
        try {
            const {data} = await CityService.getAll();
            console.log(data, 'helllllo')
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
/*
        const state = getState();
      // console.log(state);
        try {
            const {data} = await CityService.getAll()
            dispatch(getAllWithDispatch(data))
            console.log(1)
        } catch (e) {
            return rejectWithValue(e.response.data)
        }*/
    }
);


/*
const getByCity = createAsyncThunk(
    'citySlice/getByCity',
    async ({city}, {rejectWithValue}) => {
        try {
            const {data} = await CityService.getAll(city);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);*/
/*
const create = createAsyncThunk(
    'citySlice/create',
    async ({city}, {rejectWithValue}) => {
        try {
            const {data} = await CityService.create(city);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
*/

const update = createAsyncThunk(
    'citySlice/update',
    async (_, thunkAPI) => {
        try {
            const {data} = await CityService.getAll()
           thunkAPI.dispatch(getAll())
           console.log(data, 'update')
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)
// const update = createAsyncThunk(
//     'citySlice/update',
//     async ({city}, thunkAPI) => {
//         try {
//             await CityService.updateByCity(city)
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// )

const create = createAsyncThunk(
    'citySlice/create',
    async ({city}, thunkAPI) => {
        try {
            await CityService.create(city)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCity = createAsyncThunk(
    'citySlice/deleteCity',
    async ({city}, thunkAPI) => {
        try {
            await CityService.deleteByCity(city)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const citySlice = createSlice({
    name: 'CitySlice',
    initialState,
    reducers: {
        setCityForUpdate: (state, action) => {
            state.cityForUpdate = action.payload 
        }
    },
        
        // getAllWithDispatch: (state, action) => {
        //     state.city = action.payload
        //     console.log(2);
        // },
        // setCurrentCity: (state, action) => {
        //     state.currentCity = action.payload
        //     console.log(state.currentCity = action.payload);
        //     console.log(3);*/

        // deleteByCity: (state, action) => {
        //     const index = state.city.findIndex(city => city === action.payload);
        //     state.city.splice(index, 1)
            
        //     console.log(current(state.city));
        // }
    
    // extraReducers: 
    // {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.city = action.payload
    //         state.loading = false
    //         console.log(1);
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.city = action.payload
    //         console.log(2);
    //     },
    //     [getAll.pending]: (state) => {
    //         state.loading = true
    //         console.log(3);
    //     },
    //     [create.fulfilled]: (state) => {
    //         // state.city = action.payload
    //         // state.loading = false
    //         // console.log(state);
    //     }
    // }

    extraReducers: (builder) => 
    builder

        .addCase(update.fulfilled, (state, action) => {
            //state.cityForUpdate = null
            state.city = action.payload
            console.log('update updataaaaaaaaa');
        })
        .addCase(update.pending, state => {
            state.loading = true
            console.log('update pending');
        })
        .addCase(update.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
            console.log('update rejec');
        })

        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
            console.log('neeeeeeeeeeeet');
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true
            console.log('dymaet');
        })
        .addCase(getAll.fulfilled, (state, action) => {
            state.city = action.payload;


            state.loading = false
            console.log('daaaaaaaaaa')
        })


        .addCase(create.fulfilled, (state, action) => {
            state.city = action.payload
            console.log('create ful');
        })

        .addCase(deleteCity.fulfilled, state => {})
        .addMatcher(isPending(getAll, create, update), state => {
            state.loading = true
            state.error = null
        })
        .addMatcher(isFulfilled(getAll, create, update), state => {
            state.loading = false
            state.error = null
        })
        .addMatcher(isRejected(), (state, action) => {
            state.loading = false
            state.error = action.payload
        })
});


/*
        .addCase(create.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
            console.log(4);
        })
        .addCase(create.pending, (state, action) => {
            state.loading = true
            console.log(5);
        })
*/     



const {reducer: cityReducer, actions: { setCityForUpdate /*, getAllWithDispatch*/}} = citySlice;

const cityActions = {
    getAll,
    setCityForUpdate,
    create,
    update,
    deleteCity
    // setCurrentCity,
}


export { cityReducer, cityActions };


