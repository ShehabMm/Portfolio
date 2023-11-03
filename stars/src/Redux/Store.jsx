import {configureStore} from '@reduxjs/toolkit';
import imgSlice from './imgSlice' 


const Store = configureStore({
reducer:{imgSlice,}




})

export default Store