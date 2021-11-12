class Contact {
    constructor(name, phone_number) {
        this.name = name;
        this.phone_number = phone_number;
    }
}

class UI {
    static appendContact(contact) {
        const list = document.querySelector("#contact-list");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card">
                <ul style="list-style: none;">
                <li><strong>${contact.name}</strong></li>
                <li>${contact.phone_number}</li>
                </ul>
                <div class="trash">
                    <i
                        class="far fa-trash-alt"
                        style="pointer: finger;
                        margin: 5px;
                        color: white;
                        flex: center">
                    </i>
                </div>
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
        UI.showAlert("Fill in all fields!", "danger");
    }
    else if(!name.toString().match(/^[A-Z]+[A-Za-z]+$/)) {
        UI.showAlert("Name should start with big letter and consist of only letters!", "danger");
    }
    else if (!phone_number.toString().match(/^[0-9]+(\.?[0-9]+)?$/) || phone_number.length != 9){
        UI.showAlert("Phone number should consist of 9 numbers!", "danger");
    }
    else{
        const contact = new Contact(name, phone_number);
        UI.appendContact(contact);
        UI.clearFields();
    }
});

document.querySelector("#contact-list").addEventListener("click", e => {
    //console.log(e.target);
    UI.deleteContact(e.target);
});