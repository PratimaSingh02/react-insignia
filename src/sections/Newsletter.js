import React from 'react'
import Button from '../components/Button'

function Newsletter() {
    return (
        <>
        <div className='news'>
            <div className='news-info'>
                <h2>Subscribe !</h2>
                <p>Join our newsletter to never miss any latest news.</p>
            </div>
            <div className='news-input'>
                <input type='email' placeholder='Enter your e-mail address here'/>
                <Button text='Join Us' textColor='white' fontSize='12px' padding='0px 20px' isArrow={false}/>
            </div>
        </div>

        <div className='news'>
            <div className='news-info'>
                <h2>Try for free !</h2>
                <p>Get limited 1 week free try our features!</p>
            </div>
            <div className='news-btns'>
                <Button className='learn-btn' text='Learn more' textColor='white' fontSize='12px' padding='0px 20px' isArrow={false}/>
                <div></div>
                <Button text='Request Demo' textColor='#9C69E2' isArrow={true} fontSize='12px' padding='0px 20px'/>
            </div>
        </div>
        </>
    )
}

export default Newsletter
