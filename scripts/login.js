const {Database} = require('sqlite3').verbose()
const signUpForm = document.querySelector('#basic-form')
// const user = document.querySelector('.user')
// const Iuser = document.querySelector('.icon-user')

let db = new Database('db.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

function signIn(e) {
    e.preventDefault()
    const formData = new FormData(signUpForm)
    const name = formData.get('name')
    const posts = formData.get('post')
    function addUser(name, posts) {
      
      db.serialize(() => {
        db.get(`SELECT name FROM Post WHERE name = ? AND posts = ?`, [name, posts], (err, row) => {
          if (err) {
                console.error(err.message);
                return;
            }
            if (row) {
              window.location.href = '../renderer/index.html';
            } else {
              window.alert('wrong username or password')
            }
        });
      }
    )
  }
  addUser(name, posts)
}

// function User() {
//   user.classList.toggle('hidden')
// }

// Iuser.addEventListener('click', User)
signUpForm.addEventListener('submit', signIn)