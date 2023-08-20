import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import { CityService } from "../../services/city.service";


const initialState = {
    city: {},
    error: null,
    loading: false,
    cityFromAPI: null
}

const getAll = createAsyncThunk(
    'citySlice/getAll',
    async (_, {rejectWithValue, dispatch, getState}) => {
        const state = getState();
       console.log(state);
        try {
            const {data} = await CityService.getAll()
            dispatch(getAllWithDispatch(data))
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getByCity = createAsyncThunk(
    'citySlice/getByCity',
    async ({city}, {rejectWithValue}) => {
        try {
            const {data} = await CityService.getByCity(city);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const citySlice = createSlice({
    name: 'CitySlice',
    initialState,
    reducers: {
        getAllWithDispatch: (state, action) => {
            state.city = action.payload
        },
        setCurrentCity: (state, action) => {
            state.currentCity = action.payload
        },
        deleteByCity: (state, action) => {
            const index = state.city.findIndex(city => city === action.payload);
            state.city.splice(index, 1)
            
            console.log(current(state.city));
        }
    },
    extraReducers: builder => 
        builder
        .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getByCity.fulfilled, (state, action) => {
            state.cityFromAPI = action.payload
        })
});

const {reducer: cityReducer, actions: { setCurrentCity, deleteByCity, getAllWithDispatch}} = citySlice;

const cityActions = {
    getAll,
    setCurrentCity,
    getByCity,
    deleteByCity
}


export { cityReducer, cityActions };

