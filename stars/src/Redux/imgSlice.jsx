import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'; 
import axios from 'axios';


export const getData = createAsyncThunk("as", async (id, ThunkAPI)=>{

const {rejectWithValue} = ThunkAPI


try {
  const data = await axios.get('https://jsonplaceholder.typicode.com/photos')
  return data.data

}
catch (error) {
  rejectWithValue(error)
}



})

const initialState = {imgs:[], error:null}

const imgSlice = createSlice({
name:"shehab", 
initialState, 
extraReducers:(builder)=>{
builder.addCase(getData.pending, ()=>{})
builder.addCase(getData.fulfilled, (state, action)=>{
  state.imgs = action.payload
  console.log(action.payload);

})
builder.addCase(getData.rejected, (state)=>{

  state.error = true
  console.log(state.error);
})




}



})

export default imgSlice.reducer