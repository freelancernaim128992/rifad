import React from 'react';
import FooterInfo from '../../ShareComponents/FooterInfo/FooterInfo';

const FooterContainer = () => {
    const address  = [
        {name: '166 Main Street, Beverly Hills CA, 90210'},
        {name: '+24841674191'},
    ]
    const pages = [
        {name: 'Home'},
        {name: 'Product'},
        {name: 'Reviews'},
        {name: 'Contact Us'},
        {name: 'Dashboard'}
    ]
    const help = [
        {name: 'FAQs'},
        {name: 'Pricing & Plan'},
        {name: 'Privacy Policy'},
        {name: 'Terms & Conditions'},
        {name: 'Affiliate Program'},
        {name: 'How It Works'},
        {name: 'Helps'}
    ]
    const about = [
        {name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, labore.'}
    ]
    return (
        <footer className="d-flex justify-content-center mt-5 pt-5 bg-light">
            <div className="w-75 rounded row footer-container">
                <FooterInfo title={"Car House"} menuInfo={address} />
                <FooterInfo title={"Pages"} menuInfo={pages} />
                <FooterInfo title={"Help Center"} menuInfo={help} />
                <FooterInfo title={"About"} menuInfo={about} />
                <div className="text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterContainer;