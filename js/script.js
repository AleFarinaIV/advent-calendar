import { source } from './source.js';

function  createBox(index) {
    let currentElement = document.createElement('div');

    currentElement.classList.add('clickable', 'mini_box', 'p-0');

    currentElement.setAttribute('data-bs-toggle', 'modal');
    
    currentElement.setAttribute('data-bs-target', `#modal-${index}`);

    return currentElement;
};

const calendar = document.getElementById('calendar');

for (let i = 0; i < 25; i++) {
    const modalId = `modal-${i}`;

    const boxId = `${i}`;

    const modal_content = source[i].type === 'text' ? `<h2>${source[i].text}</h2>` : `<img src="../${source[i].url}" alt="${source[i].type}"`;

    let calendarBox = createBox(i);

    let boxContent = document.createElement('div');

    boxContent.setAttribute('id', `${boxId}`);

    boxContent.classList.add('box_content');

    boxContent.innerHTML = `
        <img src="../images/icons/${source[i].icon}.png" alt="${source[i].icon}">
        <span class='fw-bold'>${i+1}</span>

        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-body p-0 pt-3 bg-rose">
                    ${modal_content}
                </div>
                <div class="modal-footer bg-rose justify-content-center border-0">
                  <button type="button" class="bg-primary text-white py-1 px-2" data-bs-dismiss="modal">CHIUDI</button>
                </div>
              </div>
            </div>
        </div>
    `;

    calendarBox.append(boxContent);

    calendar.append(calendarBox);
};

calendar.lastChild.classList.remove('mini_box');

calendar.lastChild.classList.add('christmas_box', 'mt-3');