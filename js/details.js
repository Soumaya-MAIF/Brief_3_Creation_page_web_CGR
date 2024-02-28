
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };
  let idMovie = new URL (document.location.href).searchParams.get('film')
 
 
console.log(idMovie);
 
// async function loadGenres() {
//     try {
//         const reponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=fr`, options)
 
//         if(!reponse.ok){
 
//             throw new Error ('erreur de requete' + reponse.statusText);
//         }
//         const genresList = await reponse.json();
 
//         console.log("Réussite :", genresList);   
 
//         return genresList.genres
//      } catch (erreur) {
 
//         console.error("Erreur :", erreur);
//     }
 
//   }
 
//   console.log(loadGenres());
 
 
  
async function detailMovie () {
 
        try {
            const reponse = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?language=fr`, options)
            if(!reponse.ok){
 
                throw new Error ('erreur de requete' + reponse.statusText);
            }
            console.log(reponse);
            const datas = await reponse.json(); 
                console.log("Réussite :", datas);   
                let dataMovie = datas;
 
                console.log(dataMovie);
                // for (let i=0; i<dataMovie.length; i++){
 
                    // let finded_genre = genres.filter(current_genre=>dataMovie.genre_ids.includes(current_genre.id))
                    let titleMovies = dataMovie.title;
                    let releaseDate = dataMovie.release_date;
                    let posterPath = dataMovie.poster_path;
                    let resume = dataMovie.overview;


                    // let idMovie = dataMovie.id;
                    // console.log(idMovie);


                document.querySelector('.film-details').innerHTML= `

        </div>
        <h2>${titleMovies}</h2>
        <p>${releaseDate}</p>
        <img src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${titleMovies}"/>    
        <h2>Synopsis</h2>
        <p>${resume}</p>
        <h2>Distribution</h2>
        <p>Liste des acteurs...</p>
        <section class="film-recommendations">
        <h2>Recommandations</h2>
        <div class="scroll-container">
        </div>
        </section>





`  


             } catch (erreur) {
                console.error("Erreur :", erreur);
            }
        }
        // loadGenres()
        // .then(fetched_genres=>detailMovie(fetched_genres))

 
        detailMovie();

