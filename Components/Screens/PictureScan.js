import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, Animated, ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";

class PictureScan extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false,
            picture: [],
            age: '',
            smile: '',
            age: '',
            heureux: '',
            triste: '',
            surpris: '',
        }
    }
    
    componentWillMount() {
        if (this.props.azureData.emotion.happiness > 0.3) {
            console.log('Condition heureux ===', this.props.azureData.emotion.happiness > 0.2)
            this.props.onMoodCheck("heureux")
        } else if (this.props.azureData.emotion.sadness > 0.2) {
            console.log('Condition triste ===', this.props.azureData.emotion.sadness > 0.2)
            this.props.onMoodCheck("triste")
        } else if (this.props.azureData.emotion.surprise > 0.2) {
            console.log('Condition surpris ===', this.props.azureData.emotion.surprise > 0.2)
            this.props.onMoodCheck("surpris")
        } else if (this.props.azureData.emotion.neutral > 0.2) {
            console.log('Condition tete ===', this.props.azureData.emotion.neutral > 0.2)
            this.props.onMoodCheck("tete") 
        } else if (this.props.azureData.emotion.disgust > 0.2) {
            console.log('Condition second ===', this.props.azureData.emotion.disgust > 0.2)
            this.props.onMoodCheck("second")
        }

        this.setState({
            visible: true
        });
        setTimeout(() => {
            this.setState({
                visible: false
            });
            this.props.navigation.navigate('HomeScan') 
        } ,3000);
        
    }
   
    render() {
        

        return (
            <View style={styles.container}>
                
                
                <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(19,23,47,0.3)"
                    source={require("../../assets/animations/scan.json")}
                    animationStyle={styles.lottie}
                    speed={1}
                />
           
      
                {/* <Image style={{ width: '100%', height: '100%', marginTop: -200, zIndex: -100, opacity: 0.2,  }} source={require('../../assets/fil_BG.jpg')} /> */}
                    <Image style={{ width: '100%', height: '100%',  }} source={{ uri: this.props.Photo.secure_url }} />

                   
                </View>
                        
            
        );
    }
}


function mapStateToProps(state) {
    console.log('cloudinary State !!!!!!!!!!!!!!!!!!!!',state)
    return { Photo: state.cloudinary, DataRedux: state.filterData, azureData: state.Azure };
}

function mapDispatchToProps(dispatch) {
    return {
        onMoodCheck: function (moodState) {
            dispatch({ type: 'mood', mood : moodState, clear: true }
            )

        },

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PictureScan);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13172F',
        justifyContent: 'center',
        alignItems:'center'
    },
    // lottie: {
    //     width: 500,
    //     height: 300,
    // },
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