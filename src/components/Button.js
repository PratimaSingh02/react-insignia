import React from 'react'
import arrow from '../assets/arrow.png'

function Button({text,textColor,isArrow,fontSize,padding}) {
    return (
        <button className='button' style={{color:textColor,fontSize,padding}}>
            {text}
            {isArrow && 
                <img className='arrow' src={arrow} alt='arrow'/>}
        </button>
    )
}


export default Button
