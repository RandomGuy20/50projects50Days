

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".TIME");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];


toggle.addEventListener("click", (e) =>
{
    const html = document.querySelector("html");

    if(html.classList.contains("dark"))
    {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode"
    }
    else
    {
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode"
    }
});

function SetTime()
{
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours();
    const clockHours = hour % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours,0,11,0,360)}deg)`;

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;

    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;


    console.log(`${clockHours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`)

    timeEl.innerHTMl = `${clockHours}:${minutes < 10 ? `0 ${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}


const scale = (num, inMin,inMax,outMin,outMax) => {

    return (num - inMin) * (outMax - outMin) /(inMax - inMin) + outMin;
}



setInterval(SetTime,1000);