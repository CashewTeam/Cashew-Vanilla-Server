var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var slides = document.querySelectorAll(".slide");

var currentIndex = 0;

var autoPlay = true;

var foward = true;

var interval = 10000;

if(autoPlay) {
    setInterval(foward ? handleNextClicked : handlePrevClicked, interval);
}

next.addEventListener("click",handleNextClicked);
prev.addEventListener("click",handlePrevClicked);

function handleNextClicked() {
    let current = slides[currentIndex];
    
    current.classList.remove("current");
    
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    slides[currentIndex].classList.add("current");
}

function handlePrevClicked() {
    let current = slides[currentIndex];
    current.classList.remove("current");
    
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    slides[currentIndex].classList.add("current");
}