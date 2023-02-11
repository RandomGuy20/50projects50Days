
const labels = document.querySelectorAll(".form-control label");


labels.forEach(label => 
    {
        label.innerHTML = label.innerText
                          .split("")//Splitinto Array
                          .map((letter,index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)//Map to a SPan, creating array of Span
                          .join('')//Turnback to string
    })