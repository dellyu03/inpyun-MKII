const writeBtn = document.getElementById("writeBtn");
const readBtn = document.getElementById("readBtn");
const closeBtn = document.getElementById("closeBtn");
const background = document.getElementById("body");
const modalBackground = document.getElementById("modalBg");
const content = document.getElementById("content")

//모달 팝업 구현
writeBtn.addEventListener('click', function(){
    const page = document.getElementById("writePopup");
    modalBackground.style.display = "flex";
    page.style.display = "block";
    event.stopPropagation()
})

readBtn.addEventListener('click', function(){
    const page = document.getElementById("readPopup");
    modalBackground.style.display = "flex";
    page.style.display = "block";
    event.stopPropagation()
})

content.addEventListener('click', function(){
    modalBackground.style.display = "none";
})





function closeWriteTab() {
    const page = document.getElementById("writePopup");
    page.style.display = "none";
    modalBackground.style.display = "none";
    event.stopPropagation()
}

function closeReadTab() {
    const page = document.getElementById("readPopup");
    page.style.display = "none";
    modalBackground.style.display = "none";
    event.stopPropagation()
}
