//Conctact Class
class Contact {
    constructor(name, phone_number) {
        this.name = name;
        this.phone_number = phone_number;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayContacts() {
        const StoredContacts = [
            {
                name: "Bartek",
                phone_number: 123456789
            },
            {
                name: "Maja",
                phone_number: 111222345
            }
        ]

        const contacts = StoredContacts;
        contacts.forEach((contact) => {
            UI.addContactToList(contact);
        });
    }

    static addContactToList(contact) {
        const list = document.querySelector("#contact-list");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card">
                ${contact.name}<br>${contact.phone_number}
                <i class="far fa-trash-alt">S</i>
            </div>
        `
        list.appendChild(div);
    }

    static clearFields(){
        document.querySelector("#name").value = "";
        document.querySelector("#phone-number").value = "";
    }
}

//Store Class: Handles Storage

//Events: Display, Add, Remove
//Display
document.addEventListener("DOMContentLoaded", UI.displayContacts);
//Add
document.querySelector("#contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const phone_number = document.querySelector("#phone-number").value;
    const contact = new Contact(name, phone_number);
    //console.log(contact);
    UI.addContactToList(contact);
    UI.clearFields();
});

document.querySelector("#contact-list").addEventListener("click", e => {
    console.log(e.target);
});