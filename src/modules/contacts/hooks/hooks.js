import { useEffect, useState } from "react";
import Axios from 'axios';
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/contacts/';


export function useContacts() {
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState(false);

    useEffect (() => {
        Axios.get(URL).then(({data}) => setContacts(data));
    }, []);


    function deleteContact(id) {
       Axios.delete(URL + id);
       setContacts(contacts.filter(item => item.id !== id));
    };

    function createContact(data) {
        Axios.post(URL, {
            name: data.name,
            surname: data.surname,
            phone: data.phone,
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(({data}) => setContacts((contacts) => {
            return [...contacts, data]
        }));
    };

    function editPage() {
        setForm(!form);
    }

    return {
        contacts,
        setContacts,
        deleteContact,
        createContact,
        form,
        editPage
    }
}