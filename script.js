
// Create square divs like 16x16
const numXnum = 4;

const container = document.querySelector('.container')
// const square = ;
// container.appendChild(square);
// container.appendChild(document.createElement('div'));
// container.appendChild(document.createElement('div'));
// square.classList.add('box');
// for (let i = 0; i < 4; i++) {
//     container.appendChild(document.createElement('div'));
// }
for (let i = 0; i < (numXnum*numXnum); i++) {
    const square = document.createElement('div'); // Create the div
    square.classList.add('box'); // Add the class
    container.appendChild(square); // Append to the container

    square.addEventListener('mouseover', () => {square.style.backgroundColor = 'red';    
    })
}

const containerWidth = (numXnum * 50);
container.style.width = `${containerWidth}px`;


