const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };

 async function loadMovies () {

    try{

        const reponse = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        
        if(!reponse.ok){

            throw new Error ('erreur de requete' + reponse.statusText);
        }
        const datas = await reponse.json(); 

            console.log("Réussite :", datas);     
            
            for (let i=0; i<datas.results.length; i++){
            let titleMovie = datas.results[i];
            console.log(titleMovie[i].title)
    } 

         } catch (erreur) {

            console.error("Erreur :", erreur);
        }
    
    }

        loadMovies();