import React, { useState } from 'react';
import './ContactForm.css';
import '../Contacts/Contacts.css';

export default function ContactForm ({onSave, editPage, form}) {
    const [contact, setContact] = useState({
        name: '',
        surname: '',
        phone: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSave(contact);
        setContact({name: '', surname: '', phone: ''});
        editPage();
    };

     const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    };



    return (
        <div className={`${form ? "open" : "close"}`}> 
            <h1>Add contact</h1>
            <form className="form" onSubmit={onFormSubmit}>
                <input
                    required
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={onInputChange}
                    placeholder="name"
                />
                <input
                    required
                    type="text"
                    name="surname"
                    value={contact.surname}
                    onChange={onInputChange}
                    placeholder="surname"
                />
                <input
                    required
                    type="tel"
                    name="phone"
                    value={contact.phone}
                    onChange={onInputChange}
                    placeholder="phone"
                />
                
                    <button className="btn">Save</button>
                
            </form>
            
        </div>
    );
}
