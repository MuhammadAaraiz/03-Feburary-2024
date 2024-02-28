import { configureStore } from '@reduxjs/toolkit'
import userdata_slice from './slices/userdata_slice'

const store = configureStore({
    reducer: {
        userdata: userdata_slice
    },
})
export { store }

