import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import {connect} from 'react-redux';
import AnimatedLoader from "react-native-animated-loader";

class MoodScreen extends React.Component {

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
            this.props.navigation.navigate('With')
        }, 1000);
    }
  
    render() {
        return (
         // // //// // // // //  View Principale  // // // // // // // // // // /
                <View style={styles.container}> 
                <Header  // // // // // // //  Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'TON MOOD ?', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<Icon style={{ marginRight: 10 }}
                        name='camera'
                        size={22}
                        color='#fff'
                        onPress={() => this.props.navigation.navigate('FaceFeelM')} />}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                <View style={styles.Mood}>
                    <AnimatedLoader
                        visible={this.state.visible}
                        overlayColor="rgba(19,23,47,1)"
                        source={require("../../assets/animations/check2.json")}
                        animationStyle={styles.lottie}
                        speed={1.5}
                    />
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("heureux")}>
                    <Button 
                        title="Heureux"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/006-happy.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("heureux")}
                        /></TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("triste")}>
                    <Button 
                        title="Triste"
                        type="clear"
                        
                        icon={
                            
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/004-crying-1.svg')}
                            />
                           
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("triste")}
                        /></TouchableOpacity>
                </View>
                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("second")}>
                    <Button 
                        title="Etat second"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/023-tongue-out.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("second")}
                    /></TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("endormir")}>
                    <Button 
                        title="S’endormir"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/020-sleepy.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("endormir")}
                    /></TouchableOpacity>
                </View>
                <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("réfléchir")}>
                    <Button 
                        title="Réfléchir"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/007-happy-1.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%' }}
                        onPress={() => this.navigationAndSelect("réfléchir")}
                    /></TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("surpris")}>
                    <Button 
                        title="Être surpris"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/016-shocked.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("surpris")}
                    /></TouchableOpacity>
                    </View>

                    <View style={styles.Mood}>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("tete")}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Pas prise de tête"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/017-shut.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("tete")}
                        /></TouchableOpacity>
                    <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("evasion")}>
                    <Button containerStyle={styles.ButtonMood}
                        title="Evasion"
                        type="clear"
                        icon={
                            <SvgUri
                                width="70"
                                height="70"
                                source={require('../../assets/icones/svg/090-pirate.svg')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ flexDirection: 'column', flex: 1, width: '100%'  }}

                        onPress={() => this.navigationAndSelect("evasion")}
                        /></TouchableOpacity>
                </View>
                
               
                </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
     onSelectClick: function(moodState) { 
       dispatch( {type: 'mood', mood : moodState, clear : true} ) 
     }
    }
}

export default connect(
    null, 
    mapDispatchToProps
  )(MoodScreen);

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor:'#13172F'
    },
    lottie: {
        width: 300,
        height: 300
    },
    Mood: {
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    
    ButtonMood: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        height : '100%',
        width:'100%',
        marginRight: 5,
        marginLeft: 5,
        backgroundColor:'#1C213E',

    },
    TitleButton:{
        color:'#fff',
        fontWeight: 'bold',
        flexDirection: 'column',
        marginTop: 20,
    }
    



});