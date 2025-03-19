const btn2 = document.querySelectorAll('.sidebar-list-item');
const sideList = document.querySelector('.sidebar-list')
const body = document.querySelector('.main-container')
const user = document.querySelector('.user')


sideList.addEventListener('click', function(event) {
  btn2.forEach(element => { 
    element.classList.remove('active')
  });
  event.target.classList.add('active')
})

const sidebarC = document.querySelector('.sidebar')
const btn = document.querySelector('.icon-cancel')

function openSidebar() {
  sidebarC.classList.remove('hidden')
  }

function closeSidebar() {
  sidebarC.classList.add('hidden')
}

body.addEventListener('click', () => {
  sidebarC.classList.add('hidden')
})
btn.addEventListener('click', () => closeSidebar())
    

// --------------------
function User() {
  user.classList.toggle('hidden')
}