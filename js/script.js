import { source } from './source.js';

function  createMiniBox() {
    let currentElement = document.createElement('div');

    currentElement.classList.add('box');

    return currentElement
};

function createChristmasBox() {
    let currentElement = document.createElement('div');

    currentElement.classList.add('christmas_box');

    return currentElement
}

const calendar = document.getElementById('calendar');

const christmasBox = document.getElementById('christmasBox')

for (let i = 0; i < 24; i++) {

    let calendarBox = createMiniBox();

    calendarBox.innerText = i + 1;

    calendar.append(calendarBox);
};

let calendarChristmasBox = createChristmasBox();

calendarChristmasBox.innerText = 25

christmasBox.append(calendarChristmasBox);