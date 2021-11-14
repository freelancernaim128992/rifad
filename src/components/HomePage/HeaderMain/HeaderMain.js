import React from 'react';
import './HeaderMain.css'
import headerMainImg from '../../../images/header-main-car.jpg'

const HeaderMain = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="header-main-title">Welcome To <br /> Car House Website</h1>
                        <p className="header-main-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis fuga amet incidunt! Saepe illo error quae modi ex totam, quia vel obcaecati dignissimos porro? Tempore atque ducimus recusandae architecto labore!</p>
                    </div>
                    <div className="col-md-5">
                        <img src={headerMainImg} className="img-style header-main-img" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;