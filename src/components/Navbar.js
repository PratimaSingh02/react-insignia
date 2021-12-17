import React from 'react'
import Button from './Button'
import logo from '../assets/logo.png'

export default class Navbar extends React.Component{
    state={
        isOpen:false
    }

    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

render(){
    return (
        <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                    <p>Insignia</p>
                </div>   
        <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
            <li><a href='/' className='active'>About</a></li>
            <li><a href='/node_modules'>Help</a></li>
            <li><a href='/'>Features</a></li>
            <li><a href='/'>Signup</a></li>
            <li>
            <Button text='Request Demo' textColor='#30fbef' isArrow={true} fontSize='16px' padding='0px 20px'/>
            </li>
        </ul>
        <div className='nav-btn' onClick={this.handleToggle}>
        <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-mobile-application-hamburger-menu-setting-interface-basic-tritone-tal-revivo.png" alt='menu'/>
        </div>
        </nav>
    )
   }
}

