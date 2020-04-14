import React, { Component } from 'react';

export default class InfoCard extends Component {
    render() {
        const { title, color, buttonText, text, image } = this.props;

        return (
            <div className="bg-white lg:h-auto">
                <div className={`lg:h-16 lg:text-center lg:p-2 ${color}`}> {title} </div>
                <div className="lg:h-full bg-grey-100 text-black relative">
                    {text ? <p className="text-black lg:p-3">{text}</p> : <div />}
                    {image ? <img className="lg:w-full lg:p-3" src={image} alt="loading"/> : <div />}
                </div>
                <button
                    className={`${color} lg:w-2/3 lg:py-3 lg:m-5 text-xs bg-grey-100`} >
                        { buttonText }
                </button>
            </div>
        )
    }
}