// (1)- select all the buttons
const primaryColors = document.querySelector('.primary-color');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
// (2)- select the background and heading
const background = document.querySelector('.background');
const h1 = document.querySelector('.heading');
// (3)- select all the paragraphs
const p = document.querySelectorAll('main p');

// (4)- adding event listener to red button
red.addEventListener('click', function () {
    // (5)- change the background
    background.style.cssText = `background: url('red.png') no-repeat 95%/cover;`;
    // (6)- change the heading
    h1.textContent = 'Red'
    // (7)- change paragraphs
    p[0].textContent = 'rgb(255, 0, 0)'
    p[1].textContent = 'hsl(0, 100, 50)'
    p[2].textContent = '#ff0000'
})

// (8)- adding event listener to blue button
blue.addEventListener('click', function () {
    background.style.cssText = `background: url('blue.png') no-repeat 95%/cover;`;
    h1.textContent = 'Blue'
    p[0].textContent = 'rgb(0, 0, 255)'
    p[1].textContent = 'hsl(240, 100, 50)'
    p[2].textContent = '#0000ff'
})

// (9)- adding event listener to yellow button
yellow.addEventListener('click', function () {
    background.style.cssText = `background: url('yellow.png') no-repeat 95%/cover;`;
    h1.textContent = 'Yellow'
    p[0].textContent = 'rgb(255, 255, 0)'
    p[1].textContent = 'hsl(60, 100, 50)'
    p[2].textContent = '#ffff00'
})

// (10)- adding event listener to primary button
primaryColors.addEventListener('click', function () {
    background.style.cssText = `background: url('primary-colors.png') no-repeat 95%/cover;`;
    h1.textContent = 'Primary Colors'
    p[0].textContent = 'Red'
    p[1].textContent = 'Yellow'
    p[2].textContent = 'Blue'
})