export default function (DetailsFilmData = {}, action) {
  
    if (action.type == 'DetailsFilm') {

        return action.DetailsFilmData
    }

    else {
        return DetailsFilmData;
    }
}