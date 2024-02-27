const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };

 async function loadMovies () {

    try{

        const reponse = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2024-02-27&sort_by=primary_release_date.asc%27`, options)
        
        if(!reponse.ok){

            throw new Error ('erreur de requete' + reponse.statusText);
        }
        const datas = await reponse.json(); 

            console.log("Réussite :", datas);   

            let dataMovie = datas.results;

            for (let i=0; i<dataMovie.length; i++){
            
                 let titleMovies = dataMovie[i].title;

                 let releaseDate = dataMovie[i].release_date;
                 
                 let posterPath = dataMovie[i].poster_path;

                




                 

            document.querySelector('.film-grid').innerHTML += `
            <div class="film-card">
            <h2>${titleMovies}</h2>
            <p>${releaseDate}</p>
            <img src="https://image.tmdb.org/t/p/w500${posterPath}"/>
            </div>
            `
          
            
    } 

         } catch (erreur) {

            console.error("Erreur :", erreur);
        }
    
    }

        loadMovies();


        