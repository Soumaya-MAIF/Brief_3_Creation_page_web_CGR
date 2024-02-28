
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
};
let idMovie = new URL(document.location.href).searchParams.get('film')
let castingMovie = null

console.log(idMovie);


async function loadCasting() {
    
    try {
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}/credits?language=en-US`, options)

        if(!reponse.ok){

            throw new Error ('erreur de requete' + reponse.statusText);
        }
        let datas = await reponse.json();
         
        console.log(datas);
        console.log("Réussite :", datas);   
        casting = datas.cast;
        console.log(casting)
     
     } catch (erreur) {

        console.error("Erreur :", erreur);
    }

    castingMovie = [];

    for (let i = 0; i < casting.length; i++) {
        castingMovie.push(casting[i].name);
    }
    console.log(castingMovie);
  //Ici je veux boucler dans mon tableau castList pour extraire les noms des acteurs
  //
  // Puis faire une condition if(known_for_department != actor)
  // alors on extrait pas la donnée


  }
  loadCasting();

async function detailMovie(cast) {

    try {
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?language=fr`, options)
        if (!reponse.ok) {

            throw new Error('erreur de requete' + reponse.statusText);
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
        let finded_genre = [];
                    for (let i=0; i<genres.length; i++){
                        
                        finded_genre.push(genres[i].name);
                        
                    }


        // let idMovie = dataMovie.id;
        // console.log(idMovie);


        document.querySelector('.film-details').innerHTML = `

        
        <h2>${titleMovies}</h2>
        <p>${releaseDate}</p>
        <p>${finded_genre.join(', ')}</p>
        <img src="https://image.tmdb.org/t/p/w500${posterPath}" alt="${titleMovies}"/>    
        <h2>Synopsis</h2>
        <p>${resume}</p>
        <h2>Distribution</h2>
        <p>${castingMovie?.join(', ')}</p>
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


loadCasting()
        .then(fetched_cast=>detailMovie(fetched_cast));



