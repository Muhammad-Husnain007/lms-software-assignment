import { configureStore } from "@reduxjs/toolkit";
import User from "./reducer/User";
import Cartlist from "./reducer/Cartlist";


const store = configureStore({
    reducer: {
        user: User,
        cart: Cartlist,
    }
})
export default store;