// (1)- select the button and navigation
const menu = document.querySelector('button');
const navigation = document.querySelector('nav');
// (2)- select all sections
const sections = document.querySelectorAll('main section');

// (3)- add event listener
menu.addEventListener('click', () => {
    // (4)- toggle navigation
    navigation.classList.toggle('nav-active')
     // (5)- loop over the sections
    sections.forEach((i) => {
        i.style.display = 'block'
        i.classList.toggle('rotate-active')
        i.classList.toggle('closed')
    })
})

// (6)- selecting buttons and strokes
const button = document.querySelector('button');
const strokeTop = document.querySelector('.top');
const strokeMiddle = document.querySelector('.middle');
const strokeBottom = document.querySelector('.bottom');

// (7)- adding event listener
button.addEventListener('click', function () {
    strokeTop.classList.toggle('top-active')
    strokeMiddle.classList.toggle('middle-active')
    strokeBottom.classList.toggle('bottom-active')
})