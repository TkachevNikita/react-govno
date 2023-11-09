import React from 'react'
import './styles/contact.css'

export const Contact = ({contact, remove, openForm, contragent}) => {

    const removeContact = (contact) => {
        remove(contact);
    }
    
    const openChangeForm = (contact) => {
        openForm(contact);
    }

    return (
        <div className="contact">
            <h3 className="contact__title">
                Контакт
            </h3>
            <div className="contact__created">
                Дата создания: {String(contact.created)}
            </div>
            <div className="contact__update">
                Дата изменения: {String(contact.updated)}
            </div>
            <div className="contact__name">
                ФИО: {contact.name}
            </div>
            <div className="contact__email">
                Email: {contact.email}
            </div>
            <div className="contact__contragent">
                Контрагент: {contact.contragent}
            </div>
            <div className="contact__buttons">
                <button onClick={() => openChangeForm(contact)} className="contact__button update">
                    Изменить
                </button>
                <button onClick={() => removeContact(contact)} className="contact__button delete">
                    Удалить
                </button>
            </div>
        </div>
    )
}
