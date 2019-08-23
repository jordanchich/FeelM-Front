import React from 'react';
import Navigation from './Components/Navigations/Navigations';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import filmData from './Components/Redux/Films.Reducer';
import filterData from './Components/Redux/Filter.Reducer';
import wishlistData from './Components/Redux/Wishlist.Reducer';
import user from './Components/Redux/user.Reducer';
import DetailsFilmData from './Components/Redux/DetailsFilm.Reducer';
import Azure from './Components/Redux/Azure.reducer';
import cloudinary from './Components/Redux/Cloudinary.reducer'
import Teaser from './Components/Redux/Teaser.reducer';
import MatchUser from './Components/Redux/matching.reducer';
import userProfile from './Components/Redux/userProfile.reducer';
const store = createStore(combineReducers({
  filmData,
  filterData,
  wishlistData,
  user,
  DetailsFilmData,
  Azure,
  cloudinary,
  Teaser,
  MatchUser,
  userProfile
}));
export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
