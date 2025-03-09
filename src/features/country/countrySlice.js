import { createSlice, createAsyncThunk,createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/all";

const initialState = {
    loading:true,
    countries: [],
    filteredList:[],
    error:""
}

const fetchCountries = createAsyncThunk("countries/get",async () =>{
    const res = await axios.get(BASE_URL);
    return res.data;
});

const getAll = state => state.countries.countries;

const filterByRegion = createSelector(
    [ getAll, (state,action) => action.query, (state,action) => action.region ], (countries,query,region) =>{
        if(query.trim() && query.length > 2){
            return countries.filter(c => c.region.toLowerCase().includes(query.toLowerCase()) || c.name.common.toLowerCase().includes(query.toLowerCase()))
        }else{
            return (region === "All" || !region || region === "Filter By Region" )? countries : countries.filter(c => c.region.toLowerCase() === region.toLowerCase())
        }
    }
)

const selectAllRegionName = createSelector([getAll],(countries)=>{
    const regions = countries.map(c => c.region);
    regions.push("All");
    return Array.from(new Set(regions));
})

const getCountryByName = createSelector(
    [ getAll,(state,name) => name],(countries,name)=>{
        const res = countries.filter(c => c.name.common === name);
        return res[0];
});

const getCountryByCode = createSelector (
    [ getAll, (state,borders) => borders], (countries,borders) => {
        return countries.filter(c => borders.includes(c.cca3)).map(c =>c.name.common)
    })

const countrySlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        //country fetching
            .addCase(fetchCountries.fulfilled,(state,action)=>{
                state.loading = false;
                state.countries = action.payload;
                state.filteredList = Array.from(state.countries);
            })
            .addCase(fetchCountries.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export { 
    fetchCountries, 
    filterByRegion, 
    getAll, 
    selectAllRegionName, 
    getCountryByName,
    getCountryByCode
} ;
export default countrySlice.reducer;