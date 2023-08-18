import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CityService } from "../../services/city.service";

const initialState = {
    city: [],
    errors: null,
    loading: false,
}

const getAll = createAsyncThunk(
    'citySlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            let {data} = await CityService.getAll()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

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

const updateByInput = createAsyncThunk(
    'citySlice/updateByInput',
    async ({city}, {rejectWithValue}) => {
        try {
            const {data} = await CityService.updateByInput(city);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const citySlice = createSlice({
    name: 'citySlice',
    initialState,
    reducers: {
        setCityForUpdate: (state, action) => {
            state.cityForUpdate.input = action.payload;
        }
    },
    extraReducer: builder => 
    builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.city = action.payload;
            state.errors = null;
            state.loading = false;
        })
        .addCase(getAll.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(create.fulfilled, (state, action) => {
            state.city.push(action.payload);
        })
        .addCase(updateByInput.fulfilled, (state, action) => {
            const findCity = state.city.find(value => value.input.city === action.payload.city);
            Object.assign(findCity, action.payload)
            state.cityForUpdate = null;
        })
        .addDefaultCase((state, action) => {
            const [pathElement] = action.type.split('/').splice(-1)
            if (pathElement === 'rejected') {
                state.errors = action.payload;
                state.loading = false; 
            } else {
                state.errors = null;
            }
        })
})

const {reducers: cityReducer, actions: {setCityForUpdate}} = citySlice;

const cityActions = {
    getAll,
    updateByInput,
    setCityForUpdate,
    create
}



export { cityActions, cityReducer };

