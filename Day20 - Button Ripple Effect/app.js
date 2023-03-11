const buttons = document.querySelectorAll(".ripple")


buttons.forEach(button =>
{
    button.addEventListener("click", function(e)
    {
        //Get Click Location in Viewport
        const x = e.clientX;
        const y = e.clientY;


        // Gte position of button
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        //Gte from where button starts minus Click Location
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;


        // Create a cirlc eelement for Ripple
        const circle = document.createElement("span");
        circle.classList.add("circle");

        //Build Cicrlce element and set positons for click effect
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";


        //Append Child to the element -- Since using this, cannot use arrow function
        this.appendChild(circle);

        // Need to remove elemts from DOM when adding with Vanilla JS
        setTimeout(() => 
        {
            circle.remove();
        }, 500);
    })
});