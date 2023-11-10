import{createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios' 

export const getData = createAsyncThunk("newUser", async(id, ThunkAPI)=>{


const{rejectWithValue} = ThunkAPI
try {
  const data = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return data.data

}


catch (error) {
  rejectWithValue(error)

}

})


const initialState = {load:true,  error:null,  what:[]}

const usersSlice = createSlice({
  name: "shehabNew",
  initialState,

  extraReducers: (builder) => {

    builder.addCase(getData.pending, (state) => {

      state.load = true;

    });
    builder.addCase(getData.fulfilled, (state, action) => {


      state.what = action.payload;
      console.log(action.payload);
    });



    builder.addCase(getData.rejected, (state) => {
      state.load = false;

    });


  },
  reducers: null
})


export default usersSlice.reducer