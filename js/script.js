import { source } from './source.js';

function  createMiniBox() {
    let currentElement = document.createElement('div');

    currentElement.classList.add('mini_box');

    return currentElement
};

function createChristmasBox() {
    let currentElement = document.createElement('div');

    currentElement.classList.add('christmas_box');

    return currentElement
}

const calendar = document.getElementById('calendar');

const christmasBox = document.getElementById('christmasBox');

for (let i = 0; i < 25; i++) {

    let boxContent = document.createElement('div');

    boxContent.classList.add('box_content');

    boxContent.innerHTML = `
        <img src="../images/icons/${source[i].icon}.png" alt="${source[i].icon}">
        <span class='fw-bold'>${i+1}</span>
    `;

    if (i < 24) {
        let calendarBox = createMiniBox();

        calendarBox.append(boxContent);

        calendar.append(calendarBox);
    } else {
        let calendarChristmasBox = createChristmasBox();

        calendarChristmasBox.append(boxContent);

        christmasBox.append(calendarChristmasBox);
    }


};