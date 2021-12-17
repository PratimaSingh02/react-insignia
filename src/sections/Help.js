import React from 'react'
import banner from '../assets/banner.PNG'

function Help() {
    return (
        <div className='help'>
            <img className='help-img' src={banner} alt='data'/>
            <div className='help-info'>
                <h1>We are a high level data storage bank.</h1>
                <p>
                    The place to store various data that you can access at any time through the internet and where you can carry it.  </p>
                <p>
                This very flexible storage area has a high level of security.To enter into your own data you must enter the password that you created when you registered in this Data Warehouse.
                </p>
            </div>
        </div>
    )
}

export default Help
