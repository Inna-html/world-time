import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CityService } from "../../services/city.service";

const initialState = {
    city: [],
    cityForUpdate: null,
    errors: null,
    isLoading: null
}

const getAll = createAsyncThunk(
    'citySlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await CityService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const create = createAsyncThunk(
    'citySlice/create',
    async({city}, thunkAPI) => {
        try {
            await CityService.create(city)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

const citySlice = createSlice({
    name: 'citySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(
                getAll.fulfilled, (state, action) => {
                    state.city = action.payload
                    state.isLoading = false
            })
            .addCase(
                getAll.pending, (state) => {
                    // state.city = actions.payload
                    state.isLoading = true
            })
            .addCase(
                getAll.rejected, (state, actions) => {
                    state.city = actions.payload
            })
            .addCase(
                create.fulfilled, (state, action) => {
                    state.city = action.payload
                    state.isLoading = false
            })
        }    
})

const { reducer: cityReducer,  actions } = citySlice;

const cityActions = {
    getAll,
    create
}


export { cityReducer, cityActions };


