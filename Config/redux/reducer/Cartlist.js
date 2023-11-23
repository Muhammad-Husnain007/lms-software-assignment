import { createSlice } from "@reduxjs/toolkit"



const cartslice = createSlice({
    name:'cart',
    initialState:[],

    reducers:{
        add(){},
        edit(){},
        del(){},
    },
});
export const {add, edit, del} = cartslice.actions;
export default cartslice.reducer;