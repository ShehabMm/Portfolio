import {configureStore} from '@reduxjs/toolkit';
import imgSlice from './imgSlice' 
import usersSlice from './usersSlice'

const Store = configureStore({
reducer:{imgSlice, usersSlice}




})

export default Store