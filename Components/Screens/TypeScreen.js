import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import AnimatedLoader from "react-native-animated-loader";

class TypeScreen extends React.Component {

    constructor(){
        super();
        this.state = {
          onSelectClick: '',
            visible: false
        }
      }

    navigationAndSelect = (toto) => {
        this.props.onSelectClick(toto)
        this.setState({
            visible: !this.state.visible
        });
        setTimeout(() => {
            this.setState({
                visible: false
            });
            this.props.navigation.navigate('Home')
        },2000);
        

        
    }

    render() {
        const { visible } = this.state;
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
                    centerComponent={{ text: 'Type ?', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                {/***************************** Boutons ********************************/}
                <View style={styles.Mood}>
                    <AnimatedLoader
                        visible={this.state.visible}
                        overlayColor="rgba(19,23,47,1)"
                        source={require("../../assets/animations/robot.json")}
                        animationStyle={styles.lottie}
                        speed={1.5}
                    />
                    {/* <Spinner
                        visible={this.state.spinner}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                        source={require("./dino.json")}
                        animation='slide'
                    /> */}
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("film")}>
                    <Button 
                        title="Films"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/video-camera.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("film")}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.Mood} onPress={() => this.navigationAndSelect("serie")}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("serie")}>    
                    <Button 
                        title="Series"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/screen.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("serie")}
                    /></TouchableOpacity>
                </View>
                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("film")}>   
                    <Button 
                        title="Au cinéma"
                        type="clear"
                        icon={
                            <SvgUri
                                width="60"
                                height="60"
                                source={require('../../assets/icones/svg/film-reel.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.navigationAndSelect("film")}
                    />
                     </TouchableOpacity>
                </View>

            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
     onSelectClick: function(typeState) { 
       dispatch( {type: 'type', format : typeState} ) 
     }
    }
   }

export default connect(
    null, 
    mapDispatchToProps
  )(TypeScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#13172F',
        justifyContent: 'flex-start'
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
    spinnerTextStyle: {
        color: '#FFF'
    },
    ButtonMood: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#1C213E',

    },
    TitleButton: {
        color: '#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginLeft: 20,
    }




});
