
const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&' + 
                'api_key=13c91895167946b50b88af22c4506212&page=1';

const img_path = 'https://image.tmdb.org/t/p/w1280';

const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=13c91895167946b50b88af22c4506212&' +
                    'query="';

const form = document.getElementById("form");

const search = document.getElementById("search");

const main = document.getElementById("main");



GetMovies(api_url);

async function GetMovies(url)
{
    const response = await fetch(url)

    const data = await response.json();

    ShowMovies(data.results)

}

function ShowMovies(movies)
{
    main.innerHTML = "";

    movies.forEach((movie) => 
    {
        // Destructuriong
        const {title,poster_path,vote_average,overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add("movie");
        movieEl.innerHTML = `

                <img src="${img_path + poster_path}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${GetClassByRating(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>`;


            main.appendChild(movieEl);

    });
}

function GetClassByRating(rating)
{
    if(rating >= 8 )
    {
        return "green";
    }
    else if(rating >= 5  )
    {
        return "orange";
    }
    else
    {
        return "red";
    }
}

form.addEventListener("submit", (e) => 
{
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm != "")
    {
        GetMovies(search_url + searchTerm);
        search.value = "";
    }
    else
    {
        window.location.reload();
    }
});