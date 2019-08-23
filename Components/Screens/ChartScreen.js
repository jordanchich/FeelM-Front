import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity, StatusBar, Text,
} from 'react-native';
import { Button, Header, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";
import SvgUri from 'react-native-svg-uri';
class ChartScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            onSelectClick: '',
            visible: false,
            success: false
            
        }
    }
    
    componentWillMount() {
        this.setState({
            visible: !this.state.visible,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
            });

        }, 2000);
    }
    
    render() {
        

        var MonMood = this.props.me.userExist.mood
        var AvecQui = this.props.me.userExist.avec_qui
        
        
        let UsersMatch = [];

        for (let i = 0; i < this.props.user.length; i++) {
            
            let data = this.props.user[i]
            let MoiMeme = this.props.me.userExist.facebookid === data.Users.facebookid
            let Gender = this.props.me.userExist.gender != data.Users.gender
           
            console.log("MoiMeme ===== ", MoiMeme)
            console.log("Gender ===== ", Gender)

            if (data.Users.mood === MonMood 
                && data.Users.avec_qui === AvecQui
                && !MoiMeme 
                && Gender
            )  {
      
                UsersMatch.push(
                    <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title={data.Users.firstname}
                        type="clear"
                        icon={
                            <Avatar
                                containerStyle={styles.Avatar}
                                size={100}
                                rounded
                                source={{
                                    uri: decodeURIComponent(data.Users.picture),
                                }}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, }}
                        
                    />
                    </View>
                    
                )

                break;
            }

        }




        return (
            // // // // // View Principale  // // // // // //
            <View style={styles.container}>
                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'Match FeelM', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                {/***************************** Boutons ********************************/}
                <Text style={{ color: '#fff', marginTop: 30, marginBottom: 5, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
                    
                    Vous êtes souvent : {this.props.me.userExist.mood.charAt(0).toUpperCase() + this.props.me.userExist.mood.slice(1)}
                    
                </Text>
                <Text style={{ color: '#fff', marginBottom: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>

                    Avec : {this.props.me.userExist.avec_qui.charAt(0).toUpperCase() + this.props.me.userExist.avec_qui.slice(1)}

                </Text>
                <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(19,23,47,1)"
                    source={require("../../assets/animations/pint2.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                />
                
                <View style={styles.Mood}>
                    
                    <Button containerStyle={styles.ButtonMood}
                        title='Vous'
                        type="clear"
                        icon={
                            <Avatar
                                containerStyle={styles.Avatar}
                                size={100}
                                rounded
                                source={{
                                    uri: decodeURIComponent(this.props.me.userExist.picture),
                                }}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, }}

                    />
                </View>
                <View style={styles.bolt}>
                    <SvgUri style={styles.bolt}
                    width="90"
                    height="90"
                    source={require('../../assets/icones/svg/bolt.svg')}
                />
                </View>
                    {UsersMatch}

                
                <View style={{ alignItems: 'center', justifyContent: 'flex-end',}}>
                    <TouchableOpacity style={styles.chat} onPress={() => this.props.navigation.navigate('Chat')}>
                        <Button onPress={() => this.props.navigation.navigate('Chat')}
                        title="Démarrer le Chat"
                        type="clear"
                        titleStyle={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                    />
                </TouchableOpacity>
                </View> 
                 
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(' Mon profile ====', state.userProfile);
    return { user: state.MatchUser, me: state.userProfile }
}


export default connect(
    mapStateToProps,
    null
)(ChartScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#13172F',
        
       
    },
    lottie: {
        width: 300,
        height: 300
    },
    Mood: {
        height: '13%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    bolt: {
        height: '13%',
        
        alignItems:'center',
        marginTop: 15,
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15,
    },
    chat: {
        
        width: '70%',
        marginTop : 80,
        marginBottom: 20,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',

        backgroundColor: '#3DB39E'

    },
    ButtonMood: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginLeft: 5,

    },
    TitleButton: {
        color: '#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginLeft: 20,
    },
    Avatar: {
        
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
    lottie: {
        width: 300,
        height: 300
    },
    Charts: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Charts2: {
        justifyContent: 'center',
        alignItems: 'center',
   
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
   




});
