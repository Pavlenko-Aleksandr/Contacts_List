import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import ContactListItemHeader from '../ContactListItemHeader/ContactListItemHeader';
import './ContactList.css';

export default function ContactList ({contacts, onDelete, form}) {
    return (
        <div className={`${!form ? "open" : "close"}`}>
            <h1>Contact List</h1>
            <table className="table">
                <thead>
                <ContactListItemHeader/>
                </thead>
                <tbody>
                    {contacts.map((contact, id) => (
                        <ContactListItem
                            key={id}
                            contact={contact}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
