// (1)- select SVG stroke and background
const svg = document.querySelector('.background-svg');
const strokes = document.querySelectorAll('.background-stroke');
// (2)- select cards
const card1 = document.querySelector('.card:nth-of-type(1)');
const card2 = document.querySelector('.card:nth-of-type(2)');
const card3 = document.querySelector('.card:nth-of-type(3)');

// (3)- add event listener to card
card1.addEventListener('mouseover', function () {
    // (4)- change SVG fill color and add transition
    svg.style.cssText = 'fill:#0000ff; transition: all 0.5s ease;';
    strokes.forEach(function (j) {
        j.style.cssText = 'stroke:#0000ff; transition: all 0.5s ease;';
    })
})

// (4)- add event listener to card 2
card2.addEventListener('mouseover', function () {
    svg.style.cssText = 'fill:#ff0000; transition: all 0.5s ease;';
    strokes.forEach(function (j) {
        j.style.cssText = 'stroke:#ff0000; transition: all 0.5s ease;';
    })
})

// (5)- add event listener to card 3
card3.addEventListener('mouseover', function () {
    svg.style.cssText = 'fill:#ffff00; transition: all 0.5s ease;';
    strokes.forEach(function (j) {
        j.style.cssText = 'stroke:#ffff00; transition: all 0.5s ease;';
    })
})


