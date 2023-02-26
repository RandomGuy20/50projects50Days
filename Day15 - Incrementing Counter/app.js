
const counters = document.querySelectorAll(".counter");

counters.forEach(counter =>
{
    counter.innerText = "0";

    const updateCounter = () =>
        {
            const target = +counter.getAttribute("data-target");
            const data = +counter.innerText

            const increment = target / 500

            if(data < target)
            {
                counter.innerText = `${Math.ceil(data + increment)}`;
                setTimeout(updateCounter, 1);
            }
            else
            {
                counter.innerText = target;
            }
    
        }


    updateCounter();
})