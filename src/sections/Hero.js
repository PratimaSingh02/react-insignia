import React from 'react'
import Button from '../components/Button'
import hero from '../assets/hero.PNG'

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-info'>
                <h1>Save your data storage here.</h1>
                <p>Insignia is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</p>
                <Button text='Learn more' textColor='white' fontSize='17px' padding='5px 30px' isArrow={false}/>
            </div>
            <div>
                <img className='hero-img' src={hero} alt='data'/>
            </div>
        </div>
    )
}

export default Hero
