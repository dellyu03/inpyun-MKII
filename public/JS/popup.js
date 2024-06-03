// HTML 요소를 가져옵니다.
const writeBtn = document.getElementById("writeBtn");
const readBtn = document.getElementById("readBtn");
const modalBackground = document.getElementById("modalBg");
const writePopup = document.getElementById("writePopup");
const readPopup = document.getElementById("readPopup");
const closeBtns = document.querySelectorAll(".popup__closeBtn");

// 작성 모달 팝업을 엽니다.
writeBtn.addEventListener('click', function(event) {
    openModal(writePopup, event);
});

// 읽기 모달 팝업을 엽니다.
readBtn.addEventListener('click', function(event) {
    openModal(readPopup, event);
});

// 닫기 버튼 클릭 시 모달 팝업을 닫습니다.
closeBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        closeModal(event);
    });
});

// 모달 배경을 클릭했을 때 모달 팝업을 닫습니다.
modalBackground.addEventListener('click', function(event) {
    if (event.target == modalBackground) {
        closeModal(event);
    }
});

// 모달 팝업을 여는 함수
function openModal(popup, event) {
    event.stopPropagation();
    modalBackground.style.display = "flex";
    popup.style.display = "block";
}

// 모달 팝업을 닫는 함수
function closeModal(event) {
    event.stopPropagation();
    modalBackground.style.display = "none";
    writePopup.style.display = "none";
    readPopup.style.display = "none";
    var letterContent = document.getElementById("letter-content");
    letterContent.value = "";
}

const letterContainer = document.getElementById("letterContainer")
let letterList = [];
var numberOfLetter = letterList.length;

const showCount = document.getElementById("msg-counter");
showCount.innerHTML = `지금까지 ${numberOfLetter}개의 편지를 받았습니다.`

// 편지 보내는 함수
function sendletterData() {
    const newLetter = document.getElementById("letter-content").value;
    letterList.push(newLetter);
    closeModal(event);
    letterContainer.innerHTML = "";
    for (var i in letterList) {
        var letter = letterList[i];
        letterContainer.innerHTML += `<div class = "letterList-item">${letter}</div>`;
    }
    numberOfLetter = letterList.length;
    showCount.innerHTML = `지금까지 ${numberOfLetter}개의 편지를 받았습니다.`
}





//날짜 구현 함수
const userName = "유승환";
//하루의 시간을 밀리세크로 나타냄
const oneDay = 24 * 60 * 60 * 1000;
const now = new Date ();

let goal1 = {
    name : "전역",
    startDate : "2023.02.14",
    endDate : "2024.08.13"
}

let goal2 = {
    name : "병장 진급",
    startDate : "2023.11.01",
    endDate : "2024.05.01"
}

/**알맞은 형식으로 받은 날짜 정보를 받아 [년, 월, 일, 요일] 리스트르 리턴하는 함수 */
function formatDate (input) {
    inputDate = new Date(input);
    year = inputDate.getFullYear();
    month = inputDate.getMonth();
    date = inputDate.getDate();
    day = inputDate.getDay();

    result = [year, month, date, day];
    return(result);
}

/**firstDate에서 secondDate까지 남은 일수를 리턴하는 함수 */
function calDiff(firstDate, secondDate) {
    var startDate =new Date(firstDate);
    var endDate = new Date (secondDate);
    
    var timeGap = endDate - startDate;
    var daydiff = Math.ceil(timeGap/oneDay);
    
    return (daydiff);
}

var remainDays = calDiff(now, goal1.endDate);
const remainTimeMsg = document.getElementById("remain-time");
const displayUserName = document.getElementById("userName");
displayUserName.innerHTML = `${userName}님`;
remainTimeMsg.innerHTML = `${goal1.name}까지 ${remainDays}일 남았습니다!`











