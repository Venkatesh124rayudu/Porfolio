
import ContactForm from './Form';
import React from 'react';

const Contact = (props) => {
  return <> 
    <div className="pagesAline" id='contact'>
    <h1 className='Heading' id="contact_heading">Contact Me</h1>
    <p>If you would like to get in touch with me, please reach out via email or connect with me on LinkedIn.</p>
    <ContactForm />
    </div>
  </>;
}

export default Contact;
