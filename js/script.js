import { source } from './source.js';

function  createBox() {
    let currentElement = document.createElement('div');

    currentElement.classList.add('clickable', 'mini_box');

    currentElement.setAttribute('data-bs-toggle', 'modal');
    
    currentElement.setAttribute('data-bs-target', '#exampleModal');

    return currentElement
};

const calendar = document.getElementById('calendar');

for (let i = 0; i < 25; i++) {

    let calendarBox = createBox();

    let boxContent = document.createElement('div');

    boxContent.classList.add('box_content');

    boxContent.innerHTML = `
        <img src="../images/icons/${source[i].icon}.png" alt="${source[i].icon}">
        <span class='fw-bold'>${i+1}</span>
    `;

    calendarBox.append(boxContent);

    calendar.append(calendarBox);
};

calendar.lastChild.classList.remove('mini_box');

calendar.lastChild.classList.add('christmas_box', 'mt-3');