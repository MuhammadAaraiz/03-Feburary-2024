import React from 'react'
import { setuserAuth } from '../store/slices/userdata_slice'
import { useDispatch } from 'react-redux'

export const login = () => {
    const dispatch = useDispatch()
    
    const login_handle = () => {

        dispatch(setuserAuth())
    }

    return (
        <div>login</div>
    )
}
