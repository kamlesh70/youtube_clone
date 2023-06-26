import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        hide: false
    },
    reducers: {
        toggleMenu: (state, action) => {
            if(action.payload === false || action.payload === true) {
                state.hide = action.payload;
            }else{
                state.hide = !state.hide
            }
        }
    }
})

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;