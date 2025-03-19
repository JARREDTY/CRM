const report = document.querySelector('.Rdropdown')
const reported = document.querySelector('.Rdropper')
const reports = document.querySelector('#reports')
// const main = document.querySelector('.main-container')

main.addEventListener('mouseover', () => {
    report.classList.add('hidden')
})
reported.addEventListener('pointerenter', () => {
    report.classList.remove('hidden')
    Dform.classList.add('hidden')
})
// report.addEventListener('mouseleave', () => {
//     report.classList.add('hidden')
// })
report.addEventListener('click', () => {
    report.classList.add('hidden')
})


// ———————————————————————————————————————————————————————————————
// ———————————————————————— Toggle Chart —————————————————————————
// ———————————————————————————————————————————————————————————————

const Sales = document.querySelector('.S')
const PS = document.querySelector('.PS')
const enterprise = document.querySelector('.E')
const Target = document.querySelector('.T')
const HR = document.querySelector('.HR')
const Timeline = document.querySelector('.TL')

function toggleForecast() {
    PS.classList.remove('hidden')
    Sales.classList.remove('hidden')
    enterprise.classList.add('hidden')
    Target.classList.add('hidden')
    HR.classList.add('hidden')
    Timeline.classList.add('hidden')
}
function toggleFunnel() {
    HR.classList.remove('hidden')
    Timeline.classList.remove('hidden')
    enterprise.classList.add('hidden')
    Target.classList.add('hidden')
    PS.classList.add('hidden')
    Sales.classList.add('hidden')
}
function toggleSales() {
    enterprise.classList.remove('hidden')
    Target.classList.remove('hidden')
    HR.classList.add('hidden')
    Timeline.classList.add('hidden')
    PS.classList.add('hidden')
    Sales.classList.add('hidden')
}
{ reg1, reg5, reg9, reg13 }
const SHcard = document.querySelector('#serviceCardHead')
const PHcard = document.querySelector('#productCardHead')
const CHcard = document.querySelector('#customerCardHead')
const IHcard = document.querySelector('#inventoryCardHead')

SHcard.innerHTML = reg13.entries().next().value[0].length
PHcard.innerHTML = reg1.entries().next().value[0].length
CHcard.innerHTML = reg5.entries().next().value[0].length
IHcard.innerHTML = reg9.entries().next().value[0].length