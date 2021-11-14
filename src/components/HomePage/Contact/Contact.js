import React from 'react';
import email from '../../../images/email.png'
import './Contact.css'

const Contact = () => {
    return (
        <section className="bg-light">
            <div className="container">
                <h1 className='why-choos-us-title'>Contact Us</h1>
                <div className="row mt-5 pt-3">
                    <div className="col-md-6">
                        <div className="image">
                            <img src={email} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-field">
                            <h2>Get in touch</h2><br/><br/>
                            <input type="text" className="w-100 input-style border-bottom mt-3 " placeholder="Name"/><br/><br/>
                            <input type="email" className="w-100 input-style border-bottom mt-3" placeholder="Email"/><br/><br/>
                            <input type="text" className="w-100 input-style border-bottom mt-3 " placeholder="Massage"/><br/><br/>    
                        <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;