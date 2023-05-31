import React from 'react'

const User = ({
    width,
    height,
    color
}) => {
    return (
        <svg width = {width} height = {height} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default User