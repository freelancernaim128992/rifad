import React from 'react';
import person1 from '../../../images/person1.png'
import person2 from '../../../images/person2.png'
import person3 from '../../../images/person3.png'
import ReviwsInfo from '../ReviwsInfo/ReviwsInfo';

const ReviwsContainer = () => {
    const reviwsInfo = [
        {
            name: 'Robert Hok',
            post: 'Web Developer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis ducimus alias iure excepturi, doloremque, dignissimos corporis a officiis labore consequatur nostrum blanditiis magni aut! Quos neque officia exercitationem corrupti?',
            img: person1
        },
        {
            name: 'Herry Jenson',
            post: 'Designer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis ducimus alias iure excepturi, doloremque, dignissimos corporis a officiis labore consequatur nostrum blanditiis magni aut! Quos neque officia exercitationem corrupti?',
            img: person2
        },
        {
            name: 'Nela Smith',
            post: 'Video Editor',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae omnis ducimus alias iure excepturi, doloremque, dignissimos corporis a officiis labore consequatur nostrum blanditiis magni aut! Quos neque officia exercitationem corrupti?',
            img: person3
        }
    ]
    return (
        <section className="review">
            <div className="container">
                <h1 className="why-choos-us-title">Testimonials</h1>
                <div className="row mt-5 pt-5">
                    {
                        reviwsInfo.map(info => <ReviwsInfo info={info} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviwsContainer;