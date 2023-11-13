import React from 'react';
import {logo1} from '../assets/index';
import {home} from '../assets/index';
import {cart} from '../assets/index';
import {login} from '../assets/index';
import {shop} from '../assets/index';


const Header = () => {
    const headerStyle = {
        backgroundColor: 'rgb(5, 59, 80)',
        width: '100%',
        height: '70px',
    };

    const logoStyle = {
        color: 'rgb(238, 238, 238)', 
    };

    const inputStyle={
        color: 'rgb(238, 238, 238)',
        border: 'none',
        width: '500px', 
        borderRadius: '20px', 
        padding: '8px'
    };

    const cartStyle = {
        color: 'rgb(238, 238, 238)', 
    };

    const loginStyle = {
        color: 'rgb(238, 238, 238)',
    };
    const inputContainerStyle={
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    };
    const iconStyle={
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'rgb(150, 150, 150)', // Icon color
    };
    return (
        <div style={headerStyle}>
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                
                <div style={logoStyle}>
                    <img className='w-35 h-10' src={logo1}alt="logo1"/>
                </div>
                <div style={inputContainerStyle}>
                <i className="material-icons" style={iconStyle}>
                </i>
                    <input type="text" placeholder="Search for Products" style={inputStyle}/>
                </div>
                <div>
                    <ul className="flex items-center gap-8">
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300" style={cartStyle}><img className='w-6 h-6' src={home}alt="home"/></li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"style={loginStyle}><img  className='w-6 h-6'src={shop}alt="shop"/></li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"style={loginStyle}><img  className='w-6 h-6'src={cart}alt="cart"/></li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"style={loginStyle}><img  className='w-6 h-6'src={login}alt="login"/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
