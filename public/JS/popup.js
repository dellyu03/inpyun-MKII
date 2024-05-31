
const counterText = document.getElementById("msg-counter"); 
counterText.innerHTML = "지금까지 N명이 편지를 보냈습니다.";

popupName = "writePopup"
//모달 팝업 구현
function popup (popupName) {
    const page = document.getElementById(popupName);
    page.style.display = "block";
}

writeBtn.addEventListener('click', function(){
    const page = document.getElementById("writePopup");
    page.style.display = "block";
})