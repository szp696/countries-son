function loadMovies() {
    fetch("movies.json")
        .then(r => r.json())
        .then(displayMovies);
}
function displayMovies(movies) {
    displayMovie(movies[0]);
    displayMovie(movies[1]);
    displayMovie(movies[2]);
    for (let i=0; i<movies.length; i++){
        displayMovie(movies[i]);
        
    }
}
function displayMovie(movie){
    let title = document.createElement("h1");
    let protagonist = document.createElement("div");
    title.innerText = movie.title;
    protagonist.innerText = movie.protagonist.actorName + " " + movie.protagonist.characterName;
    let box = document.createElement("div");
    box.append(title,protagonist);
    document.getElementById("movies").append(box);
}
window.addEventListener("load", loadMovies);