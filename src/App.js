import React, { useState } from 'react';
import Contacts from './modules/contacts/components/Contacts/Contacts';
import Header from './modules/contacts/components/Header/Header';
import './App.css';


export default function App() {
    const [ theme, setTheme ] = useState("red");
    const toggleTheme = () => {
        if (theme === "red") {
        setTheme("blue");
    } else {
        setTheme("red");
    }
  }
    return (
        <div className={theme === "red" ? "redTheme" : "blueTheme"}>
            <Header toggleTheme={toggleTheme}/>
            <Contacts />
        </div>
    )
}
