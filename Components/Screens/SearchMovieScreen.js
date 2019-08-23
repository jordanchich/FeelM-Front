import React from 'react';
import {
  View,
  StyleSheet, TouchableOpacity, Image, ScrollView, Text
} from 'react-native';
import { Button, Header, SearchBar, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import Autocomplete from 'react-native-autocomplete-input';
import { connect } from 'react-redux';

class SearchMovieScreen extends React.Component {

  constructor(props) {
    super(props);
    //Initialization of state
    //films will contain the array of suggestion
    //query will have the input from the autocomplete input
    this.state = {
      films: [],
      query: '',

    };
  }



  DetailsSelect = (item) => {

    this.props.onSearchListClick(item)
    console.log('OBJET ITEM =====>', item)

    this.props.navigation.navigate('Film')

  }

  componentDidMount() {
    var searchMovies = this.props.searchMovies.map((data, i) => {

      return (

        {
          key: "otot" + i,
          id: data.films.id,
          title: data.films.title,
          poster_path: data.films.poster_path,
          overview: data.films.overview,
          vote_average: data.films.vote_average
        }
      )

    })


    this.setState({ films: searchMovies })

  }


  findFilm(query) {
    //method called everytime when we change the value of the input
    if (query === '') {
      //if the query is null then return blank
      return [];
    }

    const { films } = this.state;
    //making a case insensitive regular expression to get similar value from the film json
    const regex = new RegExp(`${query.trim()}`, 'i');
    //return the filtered film array according the query from the input
    return films.filter(film => film.title.search(regex) >= 0);
  }




  render() {
    const { query } = this.state;
    const films = this.findFilm(query);
    // console.log("TCL: SearchMovieScreen -> render -> films", films)

    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Header  // // // // // // //  Header
          barStyle="light-content"
          leftComponent={<Icon style={{ marginLeft: 10 }}
            name='chevron-left'
            size={25}
            color='#fff'
            onPress={() => this.props.navigation.goBack()} />}

          centerComponent={{ text: 'Recherche', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
          containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
        />


        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={films.length === 1 && comp(query, films[0].title) ? [] : films}
          //default value if you want to set something in input
          defaultValue={this.state.query}
          /*onchange of the text changing the state of the query which will trigger
          the findFilm method to show the suggestions*/
          onChangeText={text => this.setState({ query: text })}
          placeholder="Nom de film ou série"
          listStyle={{ borderColor: "#3D4A98", borderWidth: 2 }}

          renderItem={({ item, index }) => (
            <ScrollView>
              <TouchableOpacity onPress={() => this.setState({ query: title })}>

                {console.log("title films ----------->", item)}

                <ListItem
                  containerStyle={{ backgroundColor: '#1C213E' }}
                  onPress={() => this.DetailsSelect({ films: item })}
                  leftElement={
                    <View>
                      <Image style={styles.WishlistImage} source={{ uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path }} />
                    </View>
                  }
                  title={
                    <View>
                      <Text style={styles.Titre}>{item.title}</Text>
                    </View>
                  }
                  subtitle={
                    <View>
                      <Text style={styles.Synopsis}>{item.overview.substr(0, 120) + "..."}</Text>
                      <Text style={styles.Note}>Note : {item.vote_average} </Text>
                    </View>
                  }
                />


              </TouchableOpacity>
            </ScrollView>
          )
          }
        />
        <View style={styles.descriptionContainer}>
          {films.length > 0 ? (
            <Text style={styles.infoText}>{this.state.query}</Text>
          ) : (
              <Text style={styles.infoText}></Text>
            )}
        </View>
      </View>

    );
  }
}


function mapStateToProps(state) {
  return { searchMovies: state.filmData }

}

function mapDispatchToProps(dispatch) {
  return {

    onSearchListClick: function (item) {
      console.log("ITEM ======>>>", item)
      dispatch({ type: 'DetailsFilm', DetailsFilmData: item }
      )

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovieScreen);







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(19,23,47,1)'
  },

  autocompleteContainer: {
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderWidth: 0,
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
    color: "#000"
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: "#000"
  },
  WishlistImage: {
    width: 80,
    height: 130,
  },
  Synopsis: {
    marginTop: 10,
    color: '#f2f2f2',
    fontSize: 16
  },

  Note: {
    marginTop: 5,
    fontWeight: '600',
    color: '#E5C92F'

  },
  Titre: {
    fontSize: 18,
    fontWeight: '800',
    color: '#fff'
  },


  //     scroll:{ 
  //         marginTop:15,
  //        marginRight: 15,
  //         marginLeft: 15,
  //         justifyContent:"space-between",
  //         flexDirection:"row"
  //         },

  //     ButtonMood: {

  //     width: 90,
  //     height: 150,

  //     marginRight: 5,
  //     marginLeft: 5,
  //     },
  //     content:{


  //     }
});