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
class MatchUserScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            onSelectClick: '',
            visible: false,
            success: false
            
        }
    }
    
  
    
    render() {
 
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
                    centerComponent={{ text: 'Messenger FeelM', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
               
              
                 
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
)(MatchUserScreen);

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
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    chat: {
        
        width: '90%',
        marginTop : 30,
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
        borderColor: "#13172F",
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
