const movies = document.getElementById("Movies");

function fetchMovies() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9443fe97&s=avengers")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Fetched data:", data);

                data.Search.forEach((element) => {
                    const div = document.createElement("div");
                    div.className = "Movie-card";
                    const img = document.createElement("img");
                    const h3 = document.createElement("h3");

                    img.src = element.Poster;
                    h3.innerText = element.Title;
                    div.append(img, h3);
                    movies.appendChild(div);
                });
            
            
        })
        .catch((err) => {
            console.error(err);
        });
}

fetchMovies();