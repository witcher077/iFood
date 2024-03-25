import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
  name:"theme",
  initialState:{
theme:"light"
  },
  reducers:{
    lightTheme:(state,action)=>{
      state.theme="light";
      console.log(action.payload)
    },
    darkTheme:(state,action)=>{
      state.theme="dark"
      console.log(action.payload)
    }
  }
})

export const {lightTheme,darkTheme}=themeSlice.actions;

export default themeSlice.reducer;