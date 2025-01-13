const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
let maxSlide = slides.length - 1;
let curSlide = 0;
console.log(curSlide ,"aki curs")
console.log(maxSlide ,"max")


function next() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    updateSlidePosition();
}

function prev() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    updateSlidePosition();
}


function updateSlidePosition() {
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });

  

}


updateSlidePosition();

nextSlide.addEventListener("click", next);


prevSlide.addEventListener("click", prev);


var intervalId = setInterval(next, 4000);


const carousel = document.querySelector(".slider");

carousel.addEventListener("mouseenter", function () {
    clearInterval(intervalId);
});

carousel.addEventListener("mouseleave", function () {
    intervalId = setInterval(next, 4000);
});


intervalId;
