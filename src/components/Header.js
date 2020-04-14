import React, { Component } from 'react';
import logo from '../assets/logo.png';
import utn from '../assets/utn.gif';
import muni from '../assets/municipalidad.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import dribble from '../assets/dribble.png';
import text from '../constants/text';

export default class Header extends Component {    
    render() {
        const socialClassName="lg:h-10 h-20 cursor-pointer lg:mx-1 mx-auto";
        const menuItemClassName="lg:m-5 cursor-pointer";

        return (
            <div className="md:p-2 flex lg:flex-no-wrap flex-wrap">
                <img src={logo} alt="logo" className="object-scale-down lg:h-32 h-20 lg:w-1/4 w-full mx-0 my-4"/>
                <div className="">
                    <div className="">
                        <ul className="flex relative lg:flex-no-wrap flex-wrap">
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Inicio</li>
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Acerca de</li>
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Servicios</li>
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Equipo</li>
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Portfolio</li>
                            <li className={`${menuItemClassName} w-1/2 lg:text-left text-center`}>Contacto</li>
                            <div className="flex mx-auto lg:mt-3 lg:my-5 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-3">
                                <img src={twitter} alt="twitter" className={`${socialClassName}`} />
                                <img src={facebook} alt="facebook" className={`${socialClassName}`} />
                                <img src={dribble} alt="dribble" className={`${socialClassName}`} />
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:w-4/6 w-full lg:text-left text-center">{text.largeText}</div>
                        <div className="flex lg:w-2/6 w-full">
                            <img src={utn} alt="logo" className="object-scale-down h-20 w-1/2 cursor-pointer"/>
                            <img src={muni} alt="logo" className="object-scale-down h-20 w-1/2 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}