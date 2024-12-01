const {ipcRenderer} = require('electron')


const signUpForm = document.querySelector('#basic-form')


function signUp(e) {
    e.preventDefault()
    const formData = new FormData(signUpForm)
    const name = formData.get('name')
    const posts = formData.get('posts')

    ipcRenderer.send('new-post', {name, posts})
}


signUpForm.addEventListener('submit', signUp)