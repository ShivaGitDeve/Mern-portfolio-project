import React from 'react'
import { useState } from 'react';
import { BsGithub, BsLinkedin, BsMailbox, BsTwitterX } from 'react-icons/bs';
import './contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to an API)
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };
    return (
        <>
            <div className="contact-container" id='Contact'>
                <div className="row">

                <h3>
                    Contact With
                    <BsLinkedin color='blue' size={25} className='ms-2'/>
                    <BsGithub color='black' size={25} className='ms-2'/>
                    <BsTwitterX color='black' size={25} className='ms-2'/>
                    <BsMailbox color='black' size={25} className='ms-2'/>
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact;