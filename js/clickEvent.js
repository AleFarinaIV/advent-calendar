function restoreBoxState() {
    let clickedBoxes = JSON.parse(localStorage.getItem('clickedBoxes')) || [];

    document.querySelectorAll('.clickable').forEach(box => {
        let boxId = box.firstChild?.getAttribute('id');

        if (clickedBoxes.includes(boxId)) {
            box.classList.remove('clickable');
            box.classList.add('clicked');
        }

    })
}

function handleBoxClick(box) {
    let boxId = box.firstChild.getAttribute('id');

    if (!boxId) return;

    let clickedBoxes = JSON.parse(localStorage.getItem('clickedBoxes')) || [];

    if(clickedBoxes.includes(boxId)) {
        alert('Box already clicked!');
    } else {
        clickedBoxes.push(boxId);
        localStorage.setItem('clickedBoxes', JSON.stringify(clickedBoxes));

        box.classList.remove('clickable');
        box.classList.add('clicked');
        console.log(`Box ${boxId} clicked and saved!`)
    }
}

function initializeBoxes() {
    document.querySelectorAll('.clickable').forEach(box => {
        box.addEventListener('click', function() {
            handleBoxClick(box);
        });
    })
}

function clearStorage() {
    localStorage.clear();
    console.log("Storage cleared!");
    window.location.reload();
}

let resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', clearStorage);

restoreBoxState();

initializeBoxes();