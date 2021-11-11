class Contact {
    constructor(name, phone_number) {
        this.name = name;
        this.phone_number = phone_number;
    }
}

class UI {
    static displayContacts() {
        const contacts = Store.getContacts();
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
                <i
                    class="far fa-trash-alt"
                    style="pointer: finger">
                </i>
            </div>
        `
        list.appendChild(div);
    }

    static deleteContact(item){
        if(item.classList.contains("fa-trash-alt")){
            item.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container-mt-4");
        const form = document.querySelector("contact-form");
        container.insertBefore(div, form);
        //Vanish in 3 seconds
        setTimeout(() => {
            document.querySelector(".alert").remove()
        },
        3000);
    }

    static clearFields(){
        document.querySelector("#name").value = "";
        document.querySelector("#phone-number").value = "";
    }
    
    
}

document.addEventListener("DOMContentLoaded", UI.displayContacts);

document.querySelector("#contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const phone_number = document.querySelector("#phone-number").value;
    if(name === "" || phone_number === ""){
        UI.showAlert("Please fill in all fields!", "danger")
    }
    else{
        const contact = new Contact(name, phone_number);
        UI.addContactToList(contact);
        UI.clearFields();
    }
});

document.querySelector("#contact-list").addEventListener("click", e => {
    //console.log(e.target);
    UI.deleteContact(e.target);
});