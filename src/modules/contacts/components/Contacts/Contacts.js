import React from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import './Contacts.css';
import { useContacts } from '../../hooks/hooks';

export default function Contacts() {
    const { contacts, deleteContact, createContact, form, editPage} =  useContacts();
        
    return (
        <div className="contacts">
            <ContactList
            contacts={contacts}
            onDelete={deleteContact}
            editPage={editPage}
            form={form}/> 
            <ContactForm 
            onSave={createContact}
            editPage={editPage}
            form={form}/>
            <button className="btn" onClick={editPage}>{!form ? "ADD" : "CANCEL"}</button>
        </div>
        
    );
    
}
