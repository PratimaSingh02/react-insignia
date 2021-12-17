import React from 'react'

function TestimonialsCards({src,name,title,info}) {
    return (
        <div className='test-cards'>
            <img className='test-img' src={src} alt='feature'></img>
            <div className='test-info'>
                <h4>{name}</h4>
                <div className='test-title'>
                    <p>{title}</p>
                    <div className='circles'>
                        <div className='circle'/>
                        <div className='circle'/>
                        <div className='circle'/>
                        <div className='circle'/>
                    </div>
                </div>
                <p>{info}</p>
            </div>
            
        </div>
    )
}

export default TestimonialsCards
