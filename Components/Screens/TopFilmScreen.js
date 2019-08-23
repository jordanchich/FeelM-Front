import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, Image, ScrollView, Text, FlatList, Dimensions
} from 'react-native';
import { Button, Header, ListItem, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { DrawerActions } from 'react-navigation';
import { connect } from 'react-redux';

class TopFilmScreen extends React.Component {

   ///// Top Film //////////////////////////////////////////////////////////////////////////////////////////////////////////
    BestFilmsData = [];
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///// Amis Films //////////////////////////////////////////////////////////////////////////////////////////////////////////
    AmisFilmsData = [];
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    AmisFilmsData = [];
    compagnonData = [];
    SeulData = [];
    familleData = [];
    enfantsData = [];



    DetailsSelect = (index) => {
        console.log("index", index)
        this.props.onTopfilmClick(this.props.topFilms[index])
        this.props.navigation.navigate('Film')

    }
    render() {
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.BestFilmsData = [];
        let BestFilms = [];

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];

            if (data.films.vote_average > 8.4 && data.films.cat === 'film') {

                this.BestFilmsData.push({ ...data });

                BestFilms.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>

                    </View>
                )
                
            }


        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        this.AmisFilmsData = [];
        let AmisFilms = []

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];

            if (data.films.vote_average > 7 && data.films.avec_qui.includes("amis") ) {

                this.AmisFilmsData.push({ ...data });
                AmisFilms.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }


        }

        this.compagnonData = [];
        let compagnon = []

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];

            if (data.films.vote_average > 7 && data.films.avec_qui.includes("compagnon") ) {

                this.compagnonData.push({ ...data });
                compagnon.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }


        }

        this.SeulData = [];
        let seulFilms = []

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];
            if (data.films.vote_average > 7 && data.films.avec_qui.includes("seul")) {

                this.SeulData.push({ ...data });
                seulFilms.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }


        }

        this.familleData = [];
        let familleFilms = []

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];

            if (data.films.vote_average > 7 && data.films.avec_qui.includes("famille") ) {

                this.familleData.push({ ...data });
                familleFilms.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }


        }

        this.enfantsData = [];
        let enfants = []

        for (let i = 0; i < this.props.topFilms.length; i++) {
            let data = this.props.topFilms[i];

            if (data.films.vote_average > 7 && data.films.avec_qui.includes("enfants")) {

                this.enfantsData.push({ ...data });
                enfants.push(
                    <View key={i}>
                        <TouchableOpacity onPress={() => this.DetailsSelect(i)} >
                            <Image onPress={() => this.DetailsSelect(i)}
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }}
                            />
                        </TouchableOpacity>
                    </View>

                )
            }


        }

        return (
            <View style={styles.container}>
                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Top Films', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex: 100 }}
                />

                <ScrollView>

                    <Text style={styles.titre}>Best Films</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {BestFilms}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>Avec mes Amis</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {AmisFilms}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>En Amoureux</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {compagnon}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>Seul</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {seulFilms}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>En Famille</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {familleFilms}
                        </View>
                    </ScrollView>

                    <Text style={styles.titre}>Avec mes enfants</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <View style={styles.content}>
                            {enfants}
                        </View>
                    </ScrollView>

                </ScrollView>


            </View>


        )

    }

}


function mapStateToProps(state) {
    return { topFilms: state.filmData }
}

function mapDispatchToProps(dispatch) {
    return {

        onTopfilmClick: function (detailFilm) {
            console.log("detailFilm ======>>>", detailFilm)
            dispatch({ type: 'DetailsFilm', DetailsFilmData: detailFilm }
            )

        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopFilmScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(19,23,47,1)',
    },

    titre: {
        marginLeft: 20,
        marginRight: 5,
        backgroundColor: '#1C213E',
        fontSize: 22,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 10,
        marginTop: 20,
        padding: 5,
        width: 'auto'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 15
    },
    image: {
        width: 100,
        height: 150,
        margin: 5,
        borderRadius: 5
    }

});