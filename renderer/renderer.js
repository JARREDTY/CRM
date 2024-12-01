// const { color } = require("chart.js/helpers");


const form = document.querySelector('.add-customer');
const names = document.querySelector('.fullname');
const email = document.querySelector('.emailAddr');
const description = document.querySelector('.textareaDescription');
const phone = document.querySelector('.phoneNum');
const date = document.querySelector('.dateOfDeal');
const kind = document.querySelector('.kind');
const colored = document.querySelector('.color')
const tbody = document.querySelector('.tbody');

function closeForm() {
    form.classList.add('hidden')
}


function openForm() {
    form.classList.remove('hidden')
}
let Customer;


// ADD CUSTOMERS
function addCustomer() {
    new Persons().addnewCustomer();
}


    // for (let i = 1; i < 100; i++) {
    // }


class Persons{
    static ID = 1;
    constructor() {
        this.id = Persons.ID++
    }
    addnewCustomer() {
        let named = names.value
        let emails = email.value
        let phones = phone.value
        let kinds = kind.value
        let dates = date.value
        let descriptions = description.value
        let colors = colored.value
        Customer = tbody.innerHTML += `
        <tr class=${this.id} style="background-color: ${colors};">
            <td>${named}</td>
            <td>${emails}</td>
            <td>${phones}</td>
            <td>${kinds}</td>
            <td>${dates}</td>
            <td>${descriptions}</td>
            </tr>`;
        localStorage.setItem(this.id, Customer)
        console.log(this.id)
    }
}
