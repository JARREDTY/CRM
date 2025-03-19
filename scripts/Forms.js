const main = document.querySelector('.main-container')

main.addEventListener('mouseover', () => {
    Dform.classList.add('hidden')
})
// ———————————————————————————————————————————————————————————————
// ———————————————————————————— Forms ————————————————————————————
// ———————————————————————————————————————————————————————————————

const Dform = document.querySelector('.dropdown')
const Dforms = document.querySelector('#forms')
const formed = document.querySelector('.Fdropper')

formed.addEventListener('pointerenter', () => {
    Dform.classList.remove('hidden')
    report.classList.add('hidden')
})
Dform.addEventListener('click', () => {
    Dform.classList.add('hidden')
})

// ———————————————————————————————————————————————————————————————
// ——————————————————————————— Reports ———————————————————————————
// ———————————————————————————————————————————————————————————————




