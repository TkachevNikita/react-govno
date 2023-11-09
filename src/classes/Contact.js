export class Contact {
    id;
    name;
    email;
    updated;
    created;
    contragent;
    
    constructor(contact) {
        this.id = contact.id;
        this.name = contact.name;
        this.email = contact.email;
        this.updated = contact.updated;
        this.created = contact.created;
        this.contragent = contact.contragent;
    }


}