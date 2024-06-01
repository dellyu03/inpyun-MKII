// Get modal elements
const writeBtn = document.getElementById("writeBtn");
const readBtn = document.getElementById("readBtn");
const modalBackground = document.getElementById("modalBg");
const writePopup = document.getElementById("writePopup");
const readPopup = document.getElementById("readPopup");
const closeBtns = document.querySelectorAll(".popup__closeBtn");

// Open write modal
writeBtn.addEventListener('click', function(event) {
    openModal(writePopup, event);
});

// Open read modal
readBtn.addEventListener('click', function(event) {
    openModal(readPopup, event);
});

// Close modals on close button click
closeBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        closeModal(event);
    });
});

// Close modal on background click
modalBackground.addEventListener('click', function(event) {
    if (event.target == modalBackground) {
        closeModal(event);
    }
});

function openModal(popup, event) {
    event.stopPropagation();
    modalBackground.style.display = "flex";
    popup.style.display = "block";
}

function closeModal(event) {
    event.stopPropagation();
    modalBackground.style.display = "none";
    writePopup.style.display = "none";
    readPopup.style.display = "none";
}
