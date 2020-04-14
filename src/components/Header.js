import React, { Component } from 'react';
import logo from '../assets/logo.png';
import utn from '../assets/utn.gif';
import muni from '../assets/municipalidad.png';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import dribble from '../assets/dribble.png';


export default class Header extends Component {
    render() {
        return (
            <div className="md:p-2 lg:flex">
                <img src={logo} alt="logo" className="object-scale-down h-32 lg:w-1/3"/>
                <div className="2/3">
                    <div className="">
                        <ul className="lg:flex">
                            <li className="lg:m-5 cursor-pointer">Inicio</li>
                            <li className="lg:m-5 cursor-pointer">Acerca de</li>
                            <li className="lg:m-5 cursor-pointer">Servicios</li>
                            <li className="lg:m-5 cursor-pointer">Equipo</li>
                            <li className="lg:m-5 cursor-pointer">Portfolio</li>
                            <li className="lg:m-5 cursor-pointer">Contacto</li>
                            <div className="lg:flex lg:mt-3">
                                <img src={twitter} alt="twitter" className="lg:h-10 cursor-pointer" />
                                <img src={facebook} alt="facebook" className="lg:h-10 cursor-pointer" />
                                <img src={dribble} alt="dribble" className="lg:h-10 cursor-pointer" />
                            </div>
                        </ul>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:w-4/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit illum, magni sit sed consequatur unde id, nisi doloribus omnis, aliquid autem cum sequi hic vero architecto debitis modi maxime.</div>
                        <img src={utn} alt="logo" className="object-scale-down h-20 lg:w-1/6 cursor-pointer"/>
                        <img src={muni} alt="logo" className="object-scale-down h-20 lg:w-1/6 cursor-pointer"/>
                    </div>
                </div>
            </div>
        )
    }
}