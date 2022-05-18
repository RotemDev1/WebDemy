import React from 'react'
import { useSelector } from 'react-redux';

export const Details = () => {
    const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
    return (
        <div>Details</div>
    )
}
