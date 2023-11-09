import React, { useState, useEffect } from 'react'
import { Contact } from '../components/Contact'
import './styles/ContactPage.css'
import { ChangeForm } from '../components/ChangeForm'
import { contragents, mockData } from '../mocks/mock'
import { AddForm } from '../components/AddForm'
import { TextField, MenuItem } from '@mui/material'


export const ContactPage = () => {
    
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [contacts, setContacts] = useState(mockData);
    const [currentId, setCurrentId] = useState(null);
    
    const openChangeForm = (contact) => {
        setCurrentId(contact.id);
        setOpenUpdateModal(true);
    }

    const addNewContact = (contact) => {
        contact.id = contacts.length;
        setContacts([...contacts, contact])
        setOpenAddModal(false);
    }

    const changeContact = (name, email, contragent) => {
        const newContacts = [...contacts];
        const index = newContacts.findIndex((element) => element.id === currentId);
        newContacts[index].name = name;
        newContacts[index].email = email;
        newContacts[index].contragent = contragent;
        setContacts(newContacts);
        setOpenUpdateModal(false);
    }

    const addModalClose = () => {
        setOpenAddModal(false);
    }

    const updateModalClose = () => {
        setOpenUpdateModal(false);
    }

    const removeContact = (element) => {
        setContacts(contacts.filter((conctact) => conctact.id !== element.id));
    }
    // useEffect(() => {
    //     axios.get("localhost:8080/contacts").then((response) => {
    //       setContacts(response.data);
    //     });
    //   }, []);

    return (
        <div className='contact-page container'>
            <ChangeForm isOpen={openUpdateModal} close={updateModalClose} contragents={contragents} changeContact={changeContact}/>
            <AddForm addContact={addNewContact} close={addModalClose} contragents={contragents} isOpen={openAddModal}/>
            <button onClick={() => setOpenAddModal(true)} className="contact-page__button">
                Добавить
            </button>
            <div className="search__container">
                <TextField id="outlined-basic" label="Введите email" variant="outlined"/>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выберите контрагент"
                    sx={{width: 250}}
                    >
                    {contragents.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="contacts__container">
                {contacts.map((contact) => 
                    <Contact key={contact.id} contact={contact} openForm={openChangeForm} remove={removeContact}/>
                )}
            </div>
        </div>
    )
}
