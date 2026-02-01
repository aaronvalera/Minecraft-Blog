const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      imgSlider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      containers = document.querySelectorAll(".carousel-container");

containers.forEach(container => {
    const btnLeft = container.querySelector(".btn-left");
    const btnRight = container.querySelector(".btn-right");
    const imgSlider = container.querySelector(".carousels");
    const sliderSections = container.querySelectorAll(".slider-section");
    
    let counter = 0;
    let widthImg = 100 / sliderSections.length;
    
    btnRight.addEventListener("click", () => {
        if (counter >= sliderSections.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateSlider();
    });
    
    btnLeft.addEventListener("click", () => {
        if (counter <= 0) {
            counter = sliderSections.length - 1;
        } else {
            counter--;
        }
        updateSlider();
    });
    
    btnLeft.addEventListener("click", () => {
        if (counter <= 0) {
            counter = sliderSections.length - 1;
        } else {
            counter--;
        }
        updateSlider();
        });

function updateSlider() {
    let operation = counter * widthImg;
    imgSlider.style.transform = `translateX(-${operation}%)`;
    imgSlider.style.transition = "all ease 0.6s";
    }
});