import React from 'react';
import './ReviwsInfo.css'

const ReviwsInfo = ({info}) => {
    const {img, name, post, desc} = info
    return (
        <div className="col-md-4">
            <div className="review-card">
                <div className="d-flex">
                    <div className="review-img-container">
                        <img src={img} className="img-style" alt="" />
                    </div>
                    <div className="ms-3    ">
                        <h4>{name}</h4>
                        <i>{post}</i>
                    </div>
                </div>
                <p className="text-secondary mt-3">{desc}</p>
            </div>
        </div>
    );
};

export default ReviwsInfo;