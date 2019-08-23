export default function (filmData = [], action) {
    if (action.type == 'films') {
        

        var filmCopy = [...filmData];
        
   
        for (let i = 0; i < action.films.movie.length; i++) {
            filmCopy.push({

                films : action.films.movie[i]

            })
        }

        var lolo = filmCopy.sort(function (a, b) { return 0.5 - Math.random() }) 
        
        return lolo;
    } else {
        
        return filmData;
        
    }
   
}
