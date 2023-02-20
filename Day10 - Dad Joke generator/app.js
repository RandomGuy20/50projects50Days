
const joke = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click",GenerateJoke)

GenerateJoke();

async function GenerateJoke() 
{

    const config = {headers:{"Accept":"application/json"}};

    //Async
    const response = await fetch("https://icanhazdadjoke.com" ,config);

    const data = await response.json();

    joke.innerHTML = data.joke;

    /* Non Async
    //Convert to Json
    fetch("https://icanhazdadjoke.com" ,config).then(response => response.json()).then(
        //Getting data and settingit up
        data => 
        {
            joke.innerHTML = data.joke;
        })

        */
}