import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-address'>
                <div className='logo'>
                        <img src={logo} alt='logo'/>
                        <p>Insignia</p>
                </div> 
                <p>
                Insignia Society, 234 Bahagia Ave Street PRBW 29281
                </p>
                <p>
                info@insignia.com 1-232-3434 (Main)
                </p>
            </div>

            <div className='footer-list'>
               <p>About</p> 
                <ul>
                    <li>Profile</li>
                    <li>Features</li>
                    <li>Careerd</li>
                    <li>DW News</li>
                </ul>
            </div>

            <div className='footer-list'>
               <p>Help</p> 
                <ul>
                    <li>Support</li>
                    <li>Sign Up</li>
                    <li>Guide</li>
                    <li>Reports</li>
                    <li>Q&A</li>
                </ul>
            </div>

            <div className='footer-last'>
               <p> Social Media</p>
                <div className='footer-social'>
                    <div className='social-icon'>
                        <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt='facebook'/>
                    </div>
                    <div className='social-icon'>
                        <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"alt='twitter'/>
                    </div>
                    <div className='social-icon'>
                        <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt='instagram'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
