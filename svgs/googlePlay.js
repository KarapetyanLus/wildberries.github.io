import React from 'react'

const GooglePlay = () => {
    return (

        <svg width='70' height = '70' xmlns="http://www.w3.org/2000/svg"
            aria-label="Google Play" role="img"
            viewBox="0 0 512 512">

            <rect
                width="512" height="512"
                rx="15%" fill="#000" />

            <clipPath id="a">

                <path d="M465 239L169 69c-15-9-35 2-35 20v334c0 18 20 29 35 20l296-171c13-7 13-25 0-33z" />

            </clipPath>

            <g clip-path="url(#a)" transform="translate(-10 17) scale(.93324)">

                <path fill="#0e7" d="M20 53h400v355" />

                <path fill="#0df" d="M512 444H98V30" />

                <path fill="#f34" d="M399 181v322H76" />

                <path fill="#fd0" d="M324 256l180 180V76" />

            </g>

        </svg>
    )
}

export default GooglePlay