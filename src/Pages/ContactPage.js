import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806.7749566384177!2d77.78536531841506!3d11.312495274348516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9659894446b01%3A0x3cfbf94c1877c05f!2sShri%20Sakthi%20Hardwares%20%26%20Electricals!5e0!3m2!1sen!2sin!4v1616287003750!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowfullscreen=""aria-hidden="false" tabIndex="0" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 6374413806'} text2={'+91 9715310020'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'divyathalishajahan@hmail.com'} text2={'divyathshajece@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'6/67, West Street,shri Sakthi hardwares& Electicals near, Kokkarayan Pettai, Kumarapalayam (Tk),Namakkal (Dt).Pin Code-638007.'} text2={'INDIA.'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
