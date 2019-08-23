import React from 'react';
import {
    View,
    ImageBackground,
    StyleSheet, TouchableOpacity, AsyncStorage
} from 'react-native';
import { Button,  Avatar, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';

class DrawerScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            onSelectClick: '',
            visible: false,
            success: false
        }
    }

    OnClear = async () => {
      AsyncStorage.clear()
        this.props.navigation.navigate('Login')
    }

    
    componentDidMount() {
        fetch(`https://feelmapp.herokuapp.com/userSearch?facebookid=${this.props.user.userId}`).then(response => {
            return response.json();
        }).then(userPro => {
            // this.props.MatchUserHandled(userExist)
            console.log('userPro :::', userPro)
            this.props.OnUserExist(userPro)
            
            // console.log('UserExistMatch :::', this.state.UserExistMatch.userExist.avec_qui)

        }).catch(err => {
            console.log("TCL: ChartScreen -> componentWillMount -> err", err)

        });
    }
    
   
    render() {
        return (
            <View style={styles.container}>
                

                <View style={styles.profile}>

                    <Avatar containerStyle={styles.Avatar}
                        size={65}
                        rounded

                        source={{
                            uri: decodeURIComponent(this.props.user.picture),
                        }}
                    />
                    <View>
                        <Text h4 h4Style={{ fontSize: 18, color: '#7A8B97', textAlign: 'left' }}>Hello</Text>
                        <Text h4 h4Style={{ fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'left' }}>{this.props.user.firstName}</Text>
                    </View>
                    
                </View>
               
                    <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('Mood')}>   
                        <Button 
                            title="Mon Mood"
                            type="clear"

                            icon={

                                <SvgUri
                                    width="50"
                                    height="50"
                                    source={require('../../assets/icones/svg/cinema/008-superhero-5.svg')}
                                />

                            }
                            titleStyle={styles.TitleButton}
                            buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                            onPress={() => this.props.navigation.navigate('Mood')}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('FaceFeelM')}> 
                    <Button
                        title="FaceFeelM"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/012-superhero-8.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('FaceFeelM')}
                    />
                    </TouchableOpacity> 
                    </View>

                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('Wishlist')}>    
                    <Button 
                        title="Wishlist"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/034-tickets.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('Wishlist')}
                    /></TouchableOpacity> 
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('Search')}>
                    <Button 
                        title="Rechercher"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/035-robot.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('Search')}
                    /></TouchableOpacity> 
                </View>
                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('TopFilm')}>
                    <Button 
                        title="Top Films"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/019-superhero-13.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('TopFilm')}
                    /></TouchableOpacity> 
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('BoxOffice')}>
                    <Button 
                        title="Box Office"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/014-clapperboard-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('BoxOffice')}
                    /></TouchableOpacity> 
                </View>
                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('Chart')}>       
                    <Button 
                        title="MatchFeelM"
                        type="clear"

                        icon={

                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/023-negative.svg')}
                            />

                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                            onPress={() => this.props.navigation.navigate('Chart')}
                    /></TouchableOpacity> 
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Button 
                        title="Paramètres"
                        type="clear"
                        icon={
                            <SvgUri
                                width="50"
                                height="50"
                                source={require('../../assets/icones/svg/cinema/036-robot-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.props.navigation.navigate('Settings')}
                    /></TouchableOpacity> 
                </View>
                <View style={styles.Mood}>

                    <Button containerStyle={styles.ButtonLogout}
                        title="Se déconnecter"
                        type="clear"
                        icon={
                            <SvgUri
                                width="25"
                                height="25"
                                source={require('../../assets/icones/svg/cinema/logout.svg')}
                            />
                        }
                        titleStyle={styles.Logout}
                        buttonStyle={{ flexDirection: 'row', flex: 1, width: '100%', alignItems:'center', justifyContent:'flex-start' }}
                        onPress={this.OnClear}
                        
                />
                </View>
                   
                </View>
           
        );
    }
}
function mapStateToProps(state) {

    return { user: state.user }
}
function mapDispatchToProps(dispatch) {
    return {
        OnUserExist: function (UserExist) {
            dispatch({ type: 'userProfile', profile: UserExist })
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerScreen);
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#13172F'
    },
    lottie: {
        width: 300,
        height: 300
    },
    profile: {
        marginTop:50,
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    Avatar: {
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
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
    Mood: {
        height: '12%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },

    ButtonMood: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#1C213E',

    },
    ButtonLogout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%',
        marginRight: 15,
        marginLeft: 15,

    },
    TitleButton: {
        color: '#fff',
        flexDirection: 'column',
        marginTop: 10,
    },
    Logout: {
        color: '#fff',
        flexDirection: 'column',
        fontSize: 16,
        marginLeft : 20,
    }



});