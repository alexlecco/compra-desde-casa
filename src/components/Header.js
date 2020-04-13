import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import utn from '../assets/utn.gif';
import muni from '../assets/municipalidad.png';

export default class Header extends Component {
    render() {
        return (
            <div className="md:p-2 lg:flex">
                <img src={logo} alt="logo" className="object-scale-down h-48 lg:w-1/3"/>
                <div className="2/3">
                    <div className="">
                        <ul className="lg:flex">
                            <li className="lg:m-5">item 1</li>
                            <li className="lg:m-5">item 2</li>
                            <li className="lg:m-5">item 3</li>
                            <li className="lg:m-5">item 4</li>
                            <li className="lg:m-5">item 5</li>
                            <li className="lg:m-5">item 6</li>
                        </ul>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:w-4/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit illum, magni sit sed consequatur unde id, nisi doloribus omnis, aliquid autem cum sequi hic vero architecto debitis modi maxime.</div>
                        <img src={utn} alt="logo" className="object-scale-down h-20 lg:w-1/6"/>
                        <img src={muni} alt="logo" className="object-scale-down h-20 lg:w-1/6"/>
                    </div>
                </div>
            </div>
        )
    }
}