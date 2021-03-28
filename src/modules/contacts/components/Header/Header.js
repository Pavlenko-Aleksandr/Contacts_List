import React from 'react';
import'../Contacts/Contacts.css';
import './Header.css';

export default function Header({toggleTheme}) {
    return (
        <header className="header">
            <button className="btn" onClick={toggleTheme}>Toogle theme</button>
        </header>
    )
}
