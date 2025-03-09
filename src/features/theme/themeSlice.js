import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode:true
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toogleMode(state){
            state.darkMode = !state.darkMode
        }
    }
})

export const themeMode = state => state.theme.darkMode ? "dark-theme":"light-theme";
export const { toogleMode } = themeSlice.actions;
export default themeSlice.reducer;