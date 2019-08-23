import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
            KeyboardAvoidingView,
            Image, ImageBackground, TextInput, ScrollView, 
} from 'react-native';
import { Button, Header, Tile, Avatar, SocialIcon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerActions } from 'react-navigation';
import t from "tcomb-form-native";



export default class ContactScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}> 
            <Header  // // // // // // //  Header
                barStyle="light-content"
                leftComponent={<Icon style={{ marginLeft: 10 }}
                    name='chevron-left'
                    size={25}
                    color='#fff'
                    onPress={() => this.props.navigation.goBack()} />}
                centerComponent={{ text: 'Contactez Nous', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={<Icon style={{ marginRight: 10 }}
                    name='camera'
                    size={22}
                    color='#fff'
                    onPress={() => this.props.navigation.navigate('FaceFeelM')} />}
                containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
            />
                <Text style={styles.titre}>Votre Message</Text>


                <TextInput style={styles.input}
                multiline= {true}
                numberOfLines= {8}
                placeholder='Votre message'
                placeholderTextColor='#fff'
                
                title= "Votre message"
                

                />
                   
                    
                   
              
                <Button style={styles.button}
                        title="Envoyer"
                        type= "clear"
                        titleStyle={{color: "#FFF"}}
                         />
            </View>
                
          
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#13172F',
    
        
    },
   input:{
       
       padding:10,
       height: 200,
       width: "90%",
       marginLeft:20,
       marginTop: 80,
       marginBottom: 50,
       color:  "#FFF",
       borderWidth: 1,
       borderColor: "#FFF"

   },
    titre:{
        color: '#fff', fontSize: 20, fontWeight: 'bold',
        marginTop:80,
        textAlign: "center"

    },
   button:{
       marginHorizontal: 28,
       marginBottom: 100,
       backgroundColor: "#3DB39E",
       color: "#FFF"

   }

});
