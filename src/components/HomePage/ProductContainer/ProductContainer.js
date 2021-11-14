import React from 'react';
import product1 from '../../../images/product1.jpg'
import product2 from '../../../images/product2.jpg'
import product3 from '../../../images/product3.jpg'
import product4 from '../../../images/product4.jpg'
import product5 from '../../../images/product5.jpg'
import product6 from '../../../images/product6.jpg'
import ProductInfo from '../ProductInfo/ProductInfo';

const ProductContainer = () => {
    const product = [
        {
            name: 'Lamborghini',
            desc: 'Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant',
            img: product1,
            price: '10000'
        },
        {
            name: 'BMW',
            desc: 'BMW serves purely as a status symbol for some, while for others its a belief in the mantra “The Ultimate Driving Machine” and philosophy of high revving engines.',
            img: product2,
            price: '7000'
        },
        {
            name: 'JEEP',
            desc: 'Jeeps have a long and illustrious history with military roots dating back to World War II. Instantly recognizable, they are known for the legendary off-',
            img: product3,
            price: '9000'
        },
        {
            name: 'MARCEDES',
            desc: 'What is special about Mercedes-Benz The comfort, the premium upholstery, the plush carpeting, polished wood trim, sleek styling, LED mood lighting, an awesome array of information and entertainment options;',
            img: product4,
            price: '11000'
        },
        {
            name: 'TOYOTA',
            desc: 'Toyota is world-famous as the manufacturer of high-quality, high-value cars, vans and trucks that set the standard for long-term resale value and durability.',
            img: product5,
            price: '6000'
        },
        {
            name: 'ACURA',
            desc: 'Acura is the best automaker that is well known for providing cars with top performance, safety, and luxury look. Acura vehicles are a very reputable brand from a Japanese automaker.',
            img: product6,
            price: '5000'
        }
    ]
    return (
        <div>
            <section style={{background: '#F7F7F7'}}>
                <div className="container">
                    <h1 className="why-choos-us-title">Products</h1>
                    <div className="row">
                        {
                            product.map(info => <ProductInfo info={info} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductContainer;