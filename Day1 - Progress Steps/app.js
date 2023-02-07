

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;


next.addEventListener("click",() =>
{
    if (currentActive > circles.length) 
    {
        currentActive = circles.length;
        return
    }
    currentActive++;
    Update();
});

prev.addEventListener("click",() =>
{
    if (currentActive == 1) 
    {
        currentActive = 1;
        return
    }
    currentActive--;
    Update();
});

function Update()
{
    circles.forEach((circle,index) => 
    {
        if(index < currentActive)
        {
            circle.classList.add("active");
        }
        else
        {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + "%";


    prev.disabled = currentActive > 1 ? false : true;
    next.disabled = currentActive == 4? true : false;
}