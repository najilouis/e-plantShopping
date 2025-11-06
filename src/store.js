import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';
const store = configureStore({
    reducer: {
        cart: cartReducer,
        users: userReducer,
    },
});
export default store
