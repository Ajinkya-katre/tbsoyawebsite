import React from "react";
// import contactbg from '../../assets/images/hero-section/contact-hero.jpeg'
import contactbg from '../../../assets/images/hero-section/contact.jpeg'
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div>
		<div className="hero min-h-96" style={{backgroundImage: `url(${contactbg})`}}>
			<div className="hero-overlay bg-opacity-30"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
				<h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
				
				</div>
			</div>
		</div>

		<ContactForm />

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.84545827731!2d76.19106447497249!3d18.39988338267052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5713a1fbe901b%3A0xc12665f2f142b857!2sTulja%20Bhavani%20Soya%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709210212354!5m2!1sen!2sin" width="100%" height="550" style={{border:'0'}} loading="lazy"></iframe>
      </section>

     
    </div>
  );
}

export default Contact;
