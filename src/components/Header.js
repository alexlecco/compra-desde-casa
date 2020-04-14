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
        const menuItemStyle = "lg:m-5 cursor-pointer w-1/2 lg:text-left text-center";
        const socialContainerStyle = "flex mx-auto lg:mt-3 lg:my-5 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-3";
        const socialStyle = "lg:h-10 h-20 cursor-pointer lg:mx-1 mx-auto";
        const entityStyle = "object-scale-down h-20 w-1/2 cursor-pointer";

        return (
            <div className="md:p-2 flex lg:flex-no-wrap flex-wrap">
                <img src={logo} alt="logo" className="object-scale-down lg:h-32 h-20 lg:w-1/4 w-full mx-0 my-4"/>
                <div className="">
                    <div className="">
                        <ul className="flex relative lg:flex-no-wrap flex-wrap">
                            <div className="flex lg:flex-no-wrap flex-wrap lg:w-4/5">
                                <li className={`${menuItemStyle}`}>Inicio</li>
                                <li className={`${menuItemStyle}`}>Acerca de</li>
                                <li className={`${menuItemStyle}`}>Servicios</li>
                                <li className={`${menuItemStyle}`}>Equipo</li>
                                <li className={`${menuItemStyle}`}>Portfolio</li>
                                <li className={`${menuItemStyle}`}>Contacto</li>
                            </div>
                            <div className={socialContainerStyle}>
                                <img src={twitter} alt="twitter" className={`${socialStyle}`} />
                                <img src={facebook} alt="facebook" className={`${socialStyle}`} />
                                <img src={dribble} alt="dribble" className={`${socialStyle}`} />
                            </div>
                        </ul>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="lg:w-4/6 w-full lg:text-left text-center">{text.largeText}</div>
                        <div className="flex lg:w-2/6 w-full">
                            <img src={utn} alt="logo" className={entityStyle}/>
                            <img src={muni} alt="logo" className={entityStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}