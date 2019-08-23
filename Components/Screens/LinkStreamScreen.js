import React from 'react';
import {
    View,
    StyleSheet, Image
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class LinkStreamScreen extends React.Component {

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
                    centerComponent={{ text: 'Streaming', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<Icon style={{ marginRight: 10 }}
                        name='home'
                        size={22}
                        color='#fff'
                        onPress={() => this.props.navigation.navigate('Home')} />}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                {/***************************** Boutons ********************************/}
                <View style={styles.Mood}>
                    <Button containerStyle={styles.ButtonMood}
                        title=""
                        type="clear"
                        icon={
                            <Image style={{ width: 120, height: 60}}
                                 source={require('../../assets/icones/png/netflix-logo.png')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center',}}
                        onPress={() => this.props.navigation.navigate('Webview')}
                    />
                </View>
                <View style={styles.Mood}>
                    
                    <Button containerStyle={styles.ButtonMood}
                        title=""
                        type="clear"
                        icon={
                            <Image style={{ width:100, height:60}}
                                 source={require('../../assets/icones/png/prime-logo.png')}
                            />
                        }
                        titleStyle={styles.TitleButton}
                        buttonStyle={{ justifyContent: 'center', flex: 1, alignItems: 'center', }}
                        onPress={() => this.props.navigation.navigate('Webview')}
                    />
                </View>
                

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#13172F',
        justifyContent:'flex-start'
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