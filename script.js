const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      imgSlider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveLeft());
btnRight.addEventListener("click", e => moveRight());

let operation = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveRight() {
    if (counter >= sliderSection.length-1) {
        operation = 0;
        counter = 0;
        imgSlider.style.transform = `translate(-${operation}%)`;
        imgSlider.style.transtion = "none";
        return
    }
    operation = operation + widthImg;
    imgSlider.style.transform = `translate(-${operation}%)`;
    counter++;
    imgSlider.style.transition = "all ease 0.6";
}

function moveLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length-1;
        operation = widthImg * (sliderSection.length-1);
        imgSlider.style.transform = `translate(-${operation}%)`;
        imgSlider.style.transition = "none";
        return;
    }
    operation = operation - widthImg;
    imgSlider.style.transform = `translate(-${operation}%)`;
    imgSlider.style.transition= "all ease 0.6s";
}
