import React from 'react';
import {
    View,
    StyleSheet, Text, Image, ScrollView, Alert
} from 'react-native';
import { Button, Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout'

class WishlistScreen extends React.Component {

    // indexFilms = 0;
    FilmCardFitredData = [];


    DetailsSelect = (index) => {

        this.props.onWishlistClick(this.FilmCardFitredData[index])
        console.log(this.FilmCardFitredData[index])

        this.props.navigation.navigate('Film')

    }

    render() {

        var swipeSettings = [
            {
                text: 'Retirer',
                backgroundColor: '#DD2E44',
            }
        ]

        var filmWishlist = this.props.wishlist.map((data, i) => {
            //console.log('ici data =====>>>', data)

            this.FilmCardFitredData.push({ ...data });



            return (

                <View key={i} style={styles.Content} >
                    <Swipeout right={swipeSettings}>
                        <ListItem
                            key={i}
                            containerStyle={{ backgroundColor: '#1C213E' }}
                            onPress={() => this.DetailsSelect(i)}
                            leftElement={
                                <View>
                                    <Image style={styles.WishlistImage} source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }} />
                                </View>
                            }
                            title={
                                <View>
                                    <Text style={styles.Titre}>{data.films.title}</Text>
                                </View>
                            }
                            subtitle={
                                <View>
                                    <Text style={styles.Synopsis}>{data.films.overview.substr(0, 120) + "..."}</Text>
                                    <Text style={styles.Note}>Note : {data.films.vote_average}</Text>
                                </View>
                            }
                        />
                    </Swipeout>
                </View>

            )
        })





        return (
            <View style={styles.container}>
                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Wishlist', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />


                <ScrollView>

                    {filmWishlist}

                </ScrollView>


            </View>



        );
    }
}

function mapStateToProps(state) {
    //console.log('STATATATATATEEEEEEE =====>>>>>', state)
    return { wishlist: state.wishlistData, Movies: state.filmData }
}

function mapDispatchToProps(dispatch) {
    return {

        onWishlistClick: function (detailFilm) {
            console.log("detailFilm ======>>>", detailFilm)
            dispatch({ type: 'DetailsFilm', DetailsFilmData: detailFilm }
            )

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WishlistScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(19,23,47,1)',
    },

    Content: {
        flex: 1,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        margin: 10,
    },

    Titre: {
        fontSize: 22,
        fontWeight: '800',
        color: '#fff'
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

    WishlistImage: {

        width: 100,
        height: 150,
    },

});
