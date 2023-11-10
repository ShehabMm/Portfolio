import {configureStore} from '@reduxjs/toolkit';
import imgSlice from './imgSlice' 
import UsersSlice from './usersSlice'

const Store = configureStore({
reducer:{imgSlice, UsersSlice}




})

export default Store