import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet, AsyncStorage, Text, TouchableOpacity
} from 'react-native';
import { AuthSession } from 'expo';
import { SocialIcon, Avatar, Button } from 'react-native-elements';
import { connect } from 'react-redux';
class LoginScreen extends React.Component {
    
    componentDidMount = () => {

        AsyncStorage.getItem("user", (error, data) => {
            var userData = JSON.parse(data);

            this.props.signin(userData)
        })

        fetch('https://feelmapp.herokuapp.com/match').then(response => {
            return response.json();
        }).then(userMatch => {
            this.props.MatchUserHandled(userMatch)
            console.log('Tous les Users', userMatch)
        }).catch(err => {
            console.log(err);
        });
        
    }
    componentWillMount() {

        fetch('https://feelmapp.herokuapp.com/listMovies').then(response => {
            return response.json();
        }).then(dataFilms => {
            this.props.FilmsHandled(dataFilms)

        }).catch(err => {
            console.log(err);
        });
    }
    _handlePressAsync = async () => {
        var redirectUrl = AuthSession.getRedirectUrl(
        );

        var result = await AuthSession.startAsync({
            authUrl:
                'https://feelmapp.herokuapp.com/auth/facebook?redirectUrl=' + redirectUrl
        });
        // fetch('https://feelmapp.herokuapp.com/setUser').then(response => {
        //     return response.json();
        // }).then(dataFilms => {
        //     this.props.FilmsHandled(dataFilms)

        // }).catch(err => {
        //     console.log(err);
        // });
        if (result.type === 'success') {
            this.props.signin(result.params)
            AsyncStorage.setItem("user", JSON.stringify(
                result.params
            ))

            console.log("result.params", result.params);

            // this.props.navigation.navigate('Mood');
        }
    }
    render() {
        
        return (
            <ImageBackground source={require('../../assets/bg_log.jpg')} style={{ width: '100%', height: '100%' }}>
                { (this.props.user) ? 
                <View style={styles.container}>
                    <Avatar
                        containerStyle={styles.Avatar}
                        size={100}
                        rounded
                        source={{
                            uri: decodeURIComponent(this.props.user.picture),
                        }}
                    />
                    <Text style={styles.Hello}>Welcome back</Text>
                    <Text style={styles.Name}>{this.props.user.firstName}</Text>
                        <TouchableOpacity style={styles.facebookConnect} onPress={() => this.props.navigation.navigate('Mood')}>
                            <Button onPress={() => this.props.navigation.navigate('Mood')}
                            title="Continuer"
                            type="clear"
                            titleStyle={{ color:'#fff', fontWeight:'bold', fontSize:18}}
                        />
                    </TouchableOpacity>
                </View>
                    : <View style={styles.container}>
                       
                        
                        <SocialIcon style={styles.facebookConnect2}
                            title='Sign In With Facebook'
                            button
                            type='facebook'
                            onPress={this._handlePressAsync}
                        />
                    </View>
                }
            </ImageBackground>
        );
    }
}
function mapStateToProps(state) {
    
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {

    return {
        FilmsHandled: function (FilmsFetch) {
            dispatch({
                type: 'films',
                films: FilmsFetch,
                
            })
            
        },
        signin: function (user) {
            dispatch({ type: 'signin', user, })
        },
        MatchUserHandled: function (UserMatching) {
            dispatch({ type: 'Matching', userModel : UserMatching, })
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookConnect: {
        width: '65%',
        marginBottom:20,
        height:50,
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'#DD2E44'

    },
    facebookConnect2: {
        width: '65%',
        marginBottom: 20,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#3b5998'

    },
    googleConnect: {
        backgroundColor:'#fff',
        width: '85%',
        marginBottom: 90,
    },
    Hello: {
        marginTop: 20,
        color: '#fff',
        fontSize: 20,
        alignItems: 'center',
    },
    Name: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },

    Avatar: {
        marginTop: 0,
        
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 4,
        elevation: 20,
        shadowRadius: 10,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },


});