
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };
  let idMovie = new URL (document.location.href).searchParams.get('film')
 
 
console.log(idMovie);

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
                    let titleMovies = dataMovie.title;
                    let releaseDate = dataMovie.release_date;
                    let posterPath = dataMovie.poster_path;
                    let resume = dataMovie.overview;
                    let genres= dataMovie.genres;
                    let finded_genre = [];
                    for (let i=0; i<genres.length; i++){
                        
                        finded_genre.push(genres[i].name);
                        
                    }


                document.querySelector('.film-details').innerHTML= `

                    </div>
                    <h2>${titleMovies}</h2>
                    <p>${releaseDate}</p>
                    <p>${finded_genre.join(', ')}</p>
                    <img class="film-details" src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${titleMovies}"/>    
                    <h2>Synopsis</h2>
                    <p>${resume}</p>
                    <h2>Distribution</h2>
                    <p>Liste des acteurs...</p>
                    <section class="film-recommendations">
                    <h2>Recommandations</h2>
                    <div class="scroll-container">
                    </div>
                    </section>`

             } catch (erreur) {
                console.error("Erreur :", erreur);
            }
        }

        detailMovie();


