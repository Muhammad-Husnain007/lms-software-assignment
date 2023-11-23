import { createSlice } from "@reduxjs/toolkit"



const userslise = createSlice({
    name:'user',
    initialState:{
        // id:1,
        // name:'Hasnain'
        isLogin:false,
        // name:'abc',
        personalDetail:{}
},
    reducers:{
        add(state,action){
            state.isLogin = true;
            state.personalDetail = action.payload;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        edit(){},
        
    },
});
export const {add, edit} = userslise.actions;
export default userslise.reducer;

