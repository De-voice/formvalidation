let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let comfirmPassword = document.getElementById('comfirmPassword');
let loader = document.getElementById('loader');
let btn = document.getElementById('btn')

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', submitForm)
username.addEventListener('focusout', validateUserName);
email.addEventListener('focusout', validateEmail);
password.addEventListener('focusout', validatePassword);
comfirmPassword.addEventListener('focusout', validateComPass);


function submitForm(event) {
    event.preventDefault()
    if (!validatePassword() && !validateUserName() && !validateEmail())
    // btn.style.display = 'none'
        btn.classList.add('bth')
    loader.style.display = 'block'
    console.log('hello')

    setTimeout(() => {
        btn.style.display = 'block'
        loader.style.display = 'none'
    }, 2000)
}

// username
function validateUserName() {

    // check if input is empty
    if (isEmpty()) return

    // letters and atleast three character
    if (checkCharacters()) return

}

// username
function validatePassword() {

    if (validatePass()) return


}


function isEmpty() {
    let value = myForm.username.value
    console.log(value)
    if (value.trim() == '' || value == null) {
        username.classList.add('error')
            // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Username must not be empty'));
        p.classList.add('formatP')


        let divs = document.getElementById('testing')
        divs.insertBefore(p, divs.lastElementChild.nextSibling)
            // clear the error

        setTimeout(() => {
            p.innerText = '';
        }, 2000)

        return true
    }

}


function checkCharacters() {
    let value = myForm.username.value.length
    console.log(value)
    if (value < 3) {
        username.classList.add('error')
            // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Username must  be at least 3 characters'));
        p.classList.add('formatP')


        let divs = document.getElementById('testing')
        divs.insertBefore(p, divs.lastElementChild.nextSibling)

        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }
    if (!/^[a-zA-Z]+$/.test(myForm.username.value)) {
        username.classList.add('error')
            // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Username must  contain only letters'));
        p.classList.add('formatP')


        let divs = document.getElementById('testing')
        divs.insertBefore(p, divs.lastElementChild.nextSibling)

        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }
    return true

}



function validateEmail() {
    let value = myForm.email.value
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regex.test(value)) {
        email.classList.add('error')

        // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Email is not Valid'));
        p.classList.add('formatP')

        let divs = document.getElementById('testing1')

        divs.insertBefore(p, divs.lastElementChild.nextSibling)
        setTimeout(() => {
            p.innerText = '';
        }, 2000)
    }
    return true
}



// password
function validatePass() {
    let value = myForm.password.value
    if (value == '' || value == null) {
        password.classList.add('error')

        // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Password must not be empty'));
        p.classList.add('formatP')

        let divs = document.getElementById('testing2')

        divs.insertBefore(p, divs.lastElementChild.nextSibling)
        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }
    if (myForm.password.value.length < 4) {
        password.classList.add('error')

        // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Password must be at least 6 character'));
        p.classList.add('formatP')

        let divs = document.getElementById('testing2')

        divs.insertBefore(p, divs.lastElementChild.nextSibling)
        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }

}



//comPass

function validateComPass() {
    let value = myForm.password.value;
    let value2 = myForm.comfirmPassword.value;

    if (value == '' || value == null) {
        comfirmPassword.classList.add('error')

        // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Password must not be empty'));
        p.classList.add('formatP')

        let divs = document.getElementById('testing3')

        divs.insertBefore(p, divs.lastElementChild.nextSibling)
        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }

    if (value != value2) {
        comfirmPassword.classList.add('error')

        // create error element
        let p = document.createElement('p');
        p.appendChild(document.createTextNode('Password didn"t match'));
        p.classList.add('formatP')

        let divs = document.getElementById('testing3')

        divs.insertBefore(p, divs.lastElementChild.nextSibling)
        setTimeout(() => {
            p.innerText = '';
        }, 2000)
        return true
    }
}