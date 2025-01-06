let box = document.querySelectorAll('.clickable').forEach(box => {
    box.addEventListener('click', function() {
        console.log('Box clicked!');
    });
});
