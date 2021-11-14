import React from 'react';
import './WhychoosUsInfo.css'

const WhychoosUsInfo = ({info}) => {
    const { title, desc, id} = info
    return (
        <div className="col-md-4">
            <div className="row">
                <div className="col-md-2">
                    <span className="number">{id}</span>
                </div>
                <div className="col-md-10">
                    <h4 className="pb-3">{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default WhychoosUsInfo;