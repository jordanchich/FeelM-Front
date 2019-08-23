import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, Animated, ActivityIndicator
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";

class HomeScreen extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            MoviesList: [],
            status: null,
            // onSelectClick: '',
            visible: false
        };
        
    }
    indexFilms = 0;
    FilmCardFitredData  =[];
    componentWillMount() {

        // console.log(this.props.Movies)

       
        //this.setState({ status: 'Chargement des films en cours ...', MoviesList: this.props.Movies});
       // console.log('willmount=> ',this.props.Movies[0]);
        
    };
    DetailsSelect = () => {

        // this.setState({
        //     visible: !this.state.visible
        // });
        this.props.onPlayClick(this.FilmCardFitredData[this.indexFilms])
        // console.log('Noubeau toto ========> ', this.state.MoviesList[0], '@@@@@@@@@@')
        // console.log('Noubeau toto ========> ', this.FilmCardFitredData[this.indexFilms], '@@@@@@@@@@')
        this.props.navigation.navigate('Film')
        // setTimeout(() => {
        //     this.setState({
        //         visible: false
        //     });
            
        // }, 1000);
    }

    WishListSelect = () => {

        this.setState({
            visible: !this.state.visible
        });
        this.props.onSelectClick(this.FilmCardFitredData[this.indexFilms])
        // console.log('Noubeau toto ========> ', this.state.MoviesList[0], '@@@@@@@@@@')
        // console.log('Noubeau toto ========> ', this.FilmCardFitredData[this.indexFilms], '@@@@@@@@@@')
        
        setTimeout(() => {
            this.setState({
                visible: false
            });
            this.swiper.swipeRight()
        }, 1000);
    }
    render() {

         //for (let i = 0, max = this.props.Movies.length; i < max; i++) {
       
        this.FilmCardFitredData = [];
        let FilmCardFitred = [];
        
        for (let i = 0; i < this.props.Movies.length; i++) { 

            let data = this.props.Movies[i];
            var arr1 = data.films.mood;
            var arr2 = data.films.avec_qui;
            var arr3 = this.props.DataRedux;
            

            if (arr1.includes(arr3[0])
                ) {
                // console.log(arr1.includes(arr3[0]) );
                this.FilmCardFitredData.push({...data});
                FilmCardFitred.push(
 
                    <Card key={i}><Image style={styles.card} source={{ uri: 'https://image.tmdb.org/t/p/w500' + data.films.poster_path }} /></Card>
                )
            }

            
        }

        // if (arr1[0] === arr3[0]
        //     && arr2[0] === arr3[1]
        //     && arr4 === arr3[2]
        //     || arr1[1] === arr3[0]
        //     && arr2[1] === arr3[1]
        //     && arr4 === arr3[2]
        //     || arr1[2] === arr3[0]
        //     && arr2[2] === arr3[1]
        //     && arr4 === arr3[2]) {
        
        //var FilmCardFitred = filmsCard.filter(item => item)
        // console.log("filmsCard", FilmCardFitred);

        // console.log('Films ======== ',FilmCardFitred)
        // let jsonFilm = JSON.parse(FilmCardFitred);
        // console.log("Nombre films avec ceux non matché////////", filmsCard.length)
        // console.log("Tous les films avec ceux non matché////////", FilmCardFitred)
        // console.log("Tous les films matché ////////", FilmCardFitred.length)
        // console.log('Films Matché ======= ...', filmsCard.sort(function (a, b) { return 0.5 - Math.random() }));

        // 
        return (
            <View style={styles.container}>
                
                <Header  // // // // // // // // // // // // // //   Header  // // // // // // //  // // // // // // // 
                    barStyle="light-content"
                    leftComponent={<Button containerStyle={styles.ButtonMood}
                        type="clear"
                        onPress={() => { this.props.navigation.toggleDrawer() }}
                        icon={
                            <SvgUri
                                width="30"
                                height="30"
                                color='#fff'
                                source={require('../../assets/icones/svg/menu.svg')}
                                style={{ marginLeft: 15, }}
                                 />
                        }
                        /> }
                    rightComponent={<Button containerStyle={styles.ButtonMood}
                        type="clear"
                        onPress={() => this.props.navigation.navigate('Mood')}
                        icon={
                            <SvgUri
                                width="25"
                                height="25"
                                color='#fff'
                                source={require('../../assets/reset.svg')}
                                style={{ marginRight: 10, }}
                            />
                        }
                    />}
                    centerComponent={<Image style={{ width: 110, height: 25,}} source={require('../../assets/logo_feelm.png')}/>}
                    containerStyle={{ backgroundColor: 'rgba(19,23,47,0)', justifyContent: 'space-around', borderBottomColor: 'rgba(19,23,47,0)', zIndex:100 }}
                />
                <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(19,23,47,0.9)"
                    source={require("../../assets/animations/star.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                />
                <View style={{marginTop:100}}>
          
                <CardStack
                    style={styles.content}
                    renderNoMoreCards={() => 
                        <View>
                            <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Aucun film à proposer :( </Text>
                            
                        </View>
                    }  
                    ref={swiper => {
                        this.swiper = swiper
                        
                    }}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        onSwipedRight={(index) => { this.indexFilms = index + 1, console.log(this.indexFilms) }}
                        onSwipedLeft={(index) => { this.indexFilms = index + 1, console.log(this.indexFilms)}}
                        
                >
                        {/* {this.state.MoviesList} */}
                        {FilmCardFitred}  
                        
                </CardStack>
                    <Image style={{ width: '100%', height: '100%', marginTop: -200, zIndex: -100, opacity: 0.2, }} source={require('../../assets/bg_3.jpg')} /> 
                  
                <View style={{alignItems:'center'}}>  
                        
                <View style={styles.footer}>
                            
                            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                                this.swiper.swipeLeft();
                            }}>
                                <SvgUri source={require('../../assets/close.svg')} width="28"
                                    height="28" />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.orange]}
                                onPress={this.DetailsSelect} >
                                <SvgUri source={require('../../assets/play.svg')} width="40"
                                    height="40" style={{ marginLeft: 5, }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                                this.swiper.swipeRight();
                            }}>
                                <SvgUri source={require('../../assets/check-mark.svg')} width="28"
                                    height="28" />
                            </TouchableOpacity>


               </View>
               <View style={styles.footer2}>
                             
                        <TouchableOpacity style={[styles.button, styles.blue]} onPress={() => {
                            this.swiper.goBackFromLeft();
                        }}>
                            <SvgUri source={require('../../assets/icones/svg/go-back.svg')} width="28"
                                height="28" />
                        </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.yellow]} onPress={this.WishListSelect}>
                            <SvgUri source={require('../../assets/icones/svg/fav.svg')} width="28"
                                height="28" />
                        </TouchableOpacity>
                </View> 
             </View>   
                           
                </View>
               
                </View>
                        
            
        );
    }
}


function mapStateToProps(state) {
    console.log('==== State Azure', state.Azure)
    console.log('==== DataRedux', state.filterData)
    return { Movies: state.filmData, DataRedux: state.filterData, azureData: state.Azure };
}
function mapDispatchToProps(dispatch) {
    return {
        onSelectClick: function (currentFilm) {
            dispatch({ type: 'wishlistFilm', wishlistFilm : currentFilm }
            )
            
        },
        onPlayClick: function (detailFilm) {
            dispatch({ type: 'DetailsFilm', DetailsFilmData: detailFilm }
            )
            // console.log("detailFilm ======>>>", detailFilm)
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13172F'
    },
    lottie: {
        width: 300,
        height: 300,
        zIndex: -100,
    },
    Mood: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },

    
    TitleButton: {
        fontWeight: 'bold',
        flexDirection: 'column',
        marginLeft: 20,
    },
    content: {
        alignItems: 'center',
    },
    card: {
       marginTop:-20,
        width: 300,
        height: 470,
        borderRadius: 10,
        shadowColor: 'rgba(19,23,47,1)',
        shadowOffset: {
            width: 5,
            height: 10
        },
        shadowOpacity: 1,
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    
    footer: {
        marginTop: -20,
        width: 220,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 10000
    },
    footer2: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 10000
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    button: {
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
    orange: {
        width: 80,
        height: 80,
        borderWidth: 6,
        backgroundColor: '#13172F',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 55,
        marginTop: -30
    },
    green: {
        width: 50,
        height: 50,
        backgroundColor: '#3DB39E',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#3DB39E',
    },
    red: {
        width: 50,
        height: 50,
        backgroundColor: '#DD2E44',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#DD2E44',
    },
    yellow: {
        width: 50,
        height: 50,
        backgroundColor: '#E5C92F',
        borderRadius: 75,
        borderWidth: 6,
        marginLeft:15,
        borderColor: '#E5C92F',
    },
    blue: {
        width: 50,
        height: 50,
        backgroundColor: '#1C213E',
        borderRadius: 75,
        borderWidth: 6,
        marginRight:15,
        borderColor: '#1C213E',
    }
});