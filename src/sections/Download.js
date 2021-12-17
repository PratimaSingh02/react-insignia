import React from 'react'
import Button from '../components/Button'
import phone from '../assets/phone.png'

export default function Download() {
    return (
        <div className='download'>
            <div className='download-info'>
                <h1>Download Our App.</h1>
                <p>The place to store various data that you can access at any time through the internet and where you can carry it. <br/>
                This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
                </p>
                <Button className='download-btn' text='Download' textColor='white' fontSize='14px' padding='5px 30px' isArrow={false}/>
            </div>
                <img className='download-img' src={phone} alt='data'/>
        </div>
    )
}
