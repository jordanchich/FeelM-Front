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

class WithScreen extends React.Component {

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
            this.props.navigation.navigate('Type')
        }, 1000);
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
                centerComponent={{ text: 'Avec qui ?', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={<Icon style={{ marginRight: 10 }}
                    name='camera'
                    size={22}
                    color='#fff'
                    onPress={() => this.props.navigation.navigate('FaceFeelM')} />}
                containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
            />
            {/***************************** Boutons ********************************/}
            <View style={styles.Mood}>
                <AnimatedLoader
                    visible={this.state.visible}
                    overlayColor="rgba(19,23,47,1)"
                    source={require("../../assets/animations/check2.json")}
                    animationStyle={styles.lottie}
                    speed={1.5}
                /><TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("enfants")}>
                <Button 
                    title="Mes Enfants"
                    type="clear"
                    icon={
                        <SvgUri
                            width="60"
                            height="60"
                            source={require('../../assets/icones/svg/066-sweat.svg')}
                        />
                    }
                    titleStyle={styles.TitleButton}
                    buttonStyle={{ justifyContent: 'center', flex: 1, }}
                    onPress={() => this.navigationAndSelect("enfants")}
                /></TouchableOpacity>
            </View>
            <View style={styles.Mood}>
                <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("compagnon")}>
                <Button 
                    title="En amoureux"
                    type="clear"
                    icon={
                        <SvgUri
                            width="55"
                            height="55"
                            source={require('../../assets/icones/svg/120-smile.svg')}
                        />
                    }
                    titleStyle={styles.TitleButton}
                    buttonStyle={{ justifyContent: 'center', flex: 1,  }}
                    onPress={() => this.navigationAndSelect("compagnon")}
                /></TouchableOpacity>
            </View>
            <View style={styles.Mood} onPress={() => this.navigationAndSelect("seul")}>
                <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("seul")}>
                <Button containerStyle={styles.ButtonMood}
                    title="Seul"
                    type="clear"
                    icon={
                        <SvgUri
                            width="60"
                            height="60"
                            source={require('../../assets/icones/svg/062-grinning.svg')}
                        />
                    }
                    titleStyle={styles.TitleButton}
                    buttonStyle={{ justifyContent: 'center', flex: 1, }}
                    onPress={() => this.navigationAndSelect("seul")}
                /></TouchableOpacity>

            </View>
            <View style={styles.Mood}>
                <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("amis")}>
                <Button containerStyle={styles.ButtonMood}
                    title="Mes amis"
                    type="clear" 
                    icon={
                        <SvgUri
                            width="60"
                            height="60"
                            source={require('../../assets/icones/svg/129-famous.svg')}
                        />
                    }
                    titleStyle={styles.TitleButton}
                    buttonStyle={{ justifyContent: 'center', flex: 1, }}
                    onPress={() => this.navigationAndSelect("amis")}
                /></TouchableOpacity>
            </View>
            <View style={styles.Mood}>
                 <TouchableOpacity style={styles.ButtonMood} onPress={() => this.navigationAndSelect("famille")}>   
                <Button containerStyle={styles.ButtonMood}
                    title="En Famille"
                    type="clear"
                    icon={
                        <SvgUri
                            width="60"
                            height="60"
                            source={require('../../assets/icones/svg/156-woman.svg')}
                        />}
                    titleStyle={styles.TitleButton}
                    buttonStyle={{ justifyContent: 'center', flex: 1, }}
                    onPress={() => this.navigationAndSelect("famille")}
                /></TouchableOpacity>

            </View>

        </View>
    );
}
}

function mapDispatchToProps(dispatch) {
    return {
     onSelectClick: function(withState) { 
       dispatch( {type: 'with', with : withState} ) 
     }
    }
   }

export default connect(
    null, 
    mapDispatchToProps
  )(WithScreen);

const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#13172F'
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

ButtonMood: {
    flex: 1,
    width:'100%',
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