import React from 'react'

const Men = ({
    width, 
    height, 
    color
}) => {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l8.703 4.127c0.068 0.031 0.834 0.16 0.834 1.23l0.001 1.952-27.984 0.002v-2.029c0-0.795 0.596-1.045 0.835-1.154l8.782-4.145c0.63-0.289 1.065-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0.001-2.089 3.638-4.995 7.004-4.995zM15.992-0c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h27.986c1.105 0 1.999-0.895 1.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995v0z"></path>
        </svg>
  )
}

export default Men