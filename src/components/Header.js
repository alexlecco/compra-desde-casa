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
        const socialClassName="lg:h-10 cursor-pointer lg:mx-1";
        const menuItemClassName="lg:m-5 cursor-pointer";

        return (
            <div className="md:p-2 lg:flex">
                <img src={logo} alt="logo" className="object-scale-down h-32 lg:w-1/4 lg:mx-0 lg:my-4"/>
                <div className="3/4">
                    <div className="">
                        <ul className="lg:flex relative">
                            <li className={menuItemClassName}>Inicio</li>
                            <li className={menuItemClassName}>Acerca de</li>
                            <li className={menuItemClassName}>Servicios</li>
                            <li className={menuItemClassName}>Equipo</li>
                            <li className={menuItemClassName}>Portfolio</li>
                            <li className={menuItemClassName}>Contacto</li>
                            <div className="lg:flex lg:mt-3 lg:my-5 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-3">
                                <img src={twitter} alt="twitter" className={socialClassName} />
                                <img src={facebook} alt="facebook" className={socialClassName} />
                                <img src={dribble} alt="dribble" className={socialClassName} />
                            </div>
                        </ul>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:w-4/6">{text.largeText}</div>
                        <img src={utn} alt="logo" className="object-scale-down h-20 lg:w-1/6 cursor-pointer"/>
                        <img src={muni} alt="logo" className="object-scale-down h-20 lg:w-1/6 cursor-pointer"/>
                    </div>
                </div>
            </div>
        )
    }
}