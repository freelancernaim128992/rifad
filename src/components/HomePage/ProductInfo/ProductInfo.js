import React from 'react';
import './ProductInfo.css'

const ProductInfo = ({info}) => {
    const {name, img, desc, price} = info
    return (
        <div className="col-md-4 pt-5">
            <div class="card border-0 card-style">
                <div className="img-container">
                    <img src={img} class="card-img-top img-style" alt="..." />
                </div>
                <div class="card-body">
                    <h4 class="card-title" style={{color: 'orange'}}>{name}</h4>
                    <h5>$ {price}</h5>
                    <p class="card-text text-secondary">{desc}</p>
                    <div className="d-flex justify-content-center">
                    <a href="/" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;