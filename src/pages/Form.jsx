import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const [formErrors, setFormErrors] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const validateEmail = (email) => {
  //   const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  //   return re.test(email);
  // };

  // const validateForm = () => {
  //   const errors = {};
  //   if (!formData.name.trim()) {
  //     errors.name = 'Name is required';
  //   }
  //   if (!formData.email.trim()) {
  //     errors.email = 'Email is required';
  //   } else if (!validateEmail(formData.email)) {
  //     errors.email = 'Invalid email address';
  //   }
  //   if (!formData.message.trim()) {
  //     errors.message = 'Message is required';
  //   }
  //   return errors;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validateForm();
  //   if (Object.keys(errors).length === 0) {
  //     alert('Form submitted successfully!');
  //     // Here you can add code to send the form data to your server
  //     setFormData({ name: '', email: '', message: '' });
  //   } else {
  //     setFormErrors(errors);
  //   }
  // };

  return (
    <div className="contact-form">
      <form>      
  <input name="name" type="text" className="feedback-input" placeholder="Name" />   
  <input name="email" type="text" className="feedback-input" placeholder="Email" />
  <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT" />
</form>

    </div>
  );
};

export default ContactForm;
