import React from 'react';
import '../Contacts/Contacts.css';

export default function ContactListItem ({contact, onDelete}) {
        function onDeleteContact() {
            onDelete(contact.id);
        }
        return (
            <tr>
                <td>
                    {contact.name}    
                </td>
                <td>
                    {contact.surname} 
                </td>
                <td>
                    {contact.phone}
                </td>
                <td>
                    <button className="btn" onClick={onDeleteContact}>Delete</button>
                </td>
            </tr>
        );
}


