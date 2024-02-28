import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // user_name: "Aaraiz",
    // city: "Karachi",
    // country: "Pakistan",
    isloggedin: false
}

const userdata_slice = createSlice({
    initialState: initialState,
    name: 'user_data',
    reducers: {
        setuserAuth: (state) => {
            state.isloggedin = true
        }

    }
})

export default userdata_slice.reducer
export const { setuserAuth } = userdata_slice.actions
