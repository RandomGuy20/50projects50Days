

const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

rightButton.addEventListener("click", () =>
{
    activeSlide++;

    if(activeSlide > slides.length)
    {
        activeSlide = 0;
    }

    SetBackGroundToBody();
    SetActiveSlide();
});

leftButton.addEventListener("click", () =>
{
    activeSlide--;

    if(activeSlide < 0)
    {
        activeSlide = slides.length  - 1;
    }
    SetBackGroundToBody();
    SetActiveSlide();
});


SetBackGroundToBody();

function SetBackGroundToBody()
{
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function SetActiveSlide()
{
    slides.forEach((slide) =>
    {
        slide.classList.remove("active");
    });

    slides[activeSlide].classList.add("active");
}