import React, { Component } from 'react';
import InfoCard from './InfoCard';
import text from '../constants/text';
import palette from '../constants/palette';

import infoCard1 from '../assets/infoCard1.png';
import infoCard2 from '../assets/infoCard2.png';

export default class InfoCardsContainer extends Component {
    render() {
        return (
            <div className="flex lg:flex-no-wrap flex-wrap lg:justify-between lg:table-auto">
                <div className="lg:w-1/4 w-full lg:mr-1 mr-0 table-cell mb-3">
                    <InfoCard
                    title={text.titleCard1}
                    color={palette.color5}
                    buttonText={text.textButton1}
                    image={infoCard2}
                    />
                </div>
                <div className="lg:w-1/4 w-full lg:ml-2 lg:mr-2 table-cell mb-3">
                    <InfoCard
                    title={text.titleCard2}
                    color={palette.color6}
                    buttonText={text.textButton2}
                    text={text.largeText}
                    />
                </div>
                <div className="lg:w-1/4 w-full lg:ml-1 lg:mr-2 table-cell mb-3">
                    <InfoCard
                    title={text.titleCard3}
                    color={palette.color7}
                    buttonText={text.textButton3}
                    image={infoCard1}
                    />
                </div>
                <div className="lg:w-1/4 w-full lg:ml-1 table-cell mb-3">
                    <InfoCard
                    title={text.titleCard4} 
                    color={palette.color8}
                    buttonText={text.textButton4}
                    text={text.largeText}
                    />
                </div>
            </div>
        )
    }
}