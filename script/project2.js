const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modalContainer = document.getElementById('modal-container');

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    openBtn.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
        openBtn.style.display = 'block';
    }
});