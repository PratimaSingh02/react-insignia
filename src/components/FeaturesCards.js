import React from 'react'
import arrow from '../assets/arrow.png'

function FeaturesCards({src,h1,p}) {
    return (
        <div className='features-cards'>
            <img src={src} alt='feature1'></img>
            <h1>{h1}</h1>
            <p>{p}</p>
        <div className='learn'>
            <p>Learn more</p>
            <img src={arrow} alt='arrow'/>
        </div>
        </div>
    )
}

export default FeaturesCards
