import React from 'react';
import './WhychoosUsContainer.css'
import WhychoosUsInfo from '../WhychoosUsInfo/WhychoosUsInfo';

const WhychoosUsContainer = () => {
    const ChoosUsData = [
        {
            title: 'BEST PRICE THAN OTHER DEALERSHIP',
            desc: 'High-Quality Cars. Multiple inspections. Free Carfax history report. Complimentary limited warranty',
            id: '1'
        },
        {
            title: 'EASY ONLINE FINACING CACULATOR',
            desc: 'Easy online financing calculate in a few minutes. Our 12+ financing partners will compete to get you a highly competitive rate​',
            id: '2'
        },
        {
            title: 'FAST AND ACCURATE DELIVERY​',
            desc: 'Get your car or truck shipped to your home or a convenient nearby location. Fast & Accurate​',
            id: '3'
        }
    ]
    return (
        <section>
            <div className="container">
                <h2 className="why-choos-us-title">Why Choss Us? </h2>
                <div className="row pt-5">
                    {
                        ChoosUsData.map(info => <WhychoosUsInfo info={info} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default WhychoosUsContainer;