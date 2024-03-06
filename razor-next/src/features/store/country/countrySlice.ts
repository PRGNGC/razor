import { createSlice } from '@reduxjs/toolkit'

export interface CountryState {
    country: string,
    mapCountry: string
}

const initialState: CountryState = {
    country: 'United States',
    mapCountry: 'USA'
}

export const country = createSlice({
    name: 'country',
    initialState,
    reducers: {
        countryChange: (state, action) => {
            state.country = action.payload;
            state.mapCountry = 'USA'
        }
    },
})

export const { countryChange } = country.actions

export default country.reducer