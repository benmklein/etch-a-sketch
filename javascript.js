function makeGrid(size) {
    container = document.createElement('div');
    container.classList.add('container');
    document.querySelector('body').appendChild(container);
    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText += `height: ${800 / size}px; width: ${800 / size}px`;
        box.addEventListener('mouseover', () => {
            box.classList.add('activated', 'hover');
            const random = Math.random() * 500 + 500;
            setTimeout(() => {
                box.classList.remove('hover');
            }, random);
        });
        container.appendChild(box);
    }
}

function setGrid() {
    let userInput = prompt("How big should the height/width be?");
    const oldContainer = document.querySelector('.container');
    console.log(oldContainer);
    if (oldContainer !== null){
        document.querySelector('body').removeChild(oldContainer);  
    };
    makeGrid(userInput);
}
