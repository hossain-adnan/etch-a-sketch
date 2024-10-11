
// Create square divs like 16x16
const promptBtn = document.querySelector('.promptBtn');

promptBtn.addEventListener('click', () => {
    let numXnum = Number(prompt('Enter Grid Size upto 100'));
    const container = document.querySelector('.container');

    container.innerHTML = '';
    let height = container.getBoundingClientRect().height;
    let width = container.getBoundingClientRect().width;

    for (let i = 0; i < (numXnum*numXnum); i++) {
        const square = document.createElement('div'); // Create the div
        square.classList.add('box'); // Add the class
        square.style.width = `${width / numXnum}px`;
        square.style.height = `${height / numXnum}px`;
        container.appendChild(square); // Append to the container
        square.addEventListener('mouseover', () => {square.style.backgroundColor = 'red';    
        });
    }
    square.addEventListener('mouseover', () => {square.style.backgroundColor = 'red';   
    });
    // const containerWidth = (numXnum * 50); 
    // container.style.width = `${containerWidth}px`;
});
// const numXnum = 4;






