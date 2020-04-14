import React, { Component } from 'react';

export default class InfoCard extends Component {
    render() {
        const { title, color, buttonText, text, image } = this.props;

        return (
            <div className="bg-white lg:h-auto">
                <div className={`lg:h-16 lg:text-center p-2 ${color}`}> {title} </div>
                <div className="lg:h-full bg-grey-100 text-black relative">
                    {text ? <p className="text-black p-3">{text}</p> : <div />}
                    {image ? <img className="lg:w-full p-3 " src={image} alt="loading"/> : <div />}
                </div>
                <button
                    className={`${color} w-2/3 py-3 m-5 text-xs bg-grey-100`} >
                        { buttonText }
                </button>
            </div>
        )
    }
}