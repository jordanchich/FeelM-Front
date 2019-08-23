import React from 'react';
import {WebView,View,StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';

export default class VodWebviewScreen extends React.Component {
    render() {
        return (
            
           
                
            <View style={{flex:1}}>
                 <Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: 'FeelM Explorer', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    rightComponent={<Icon style={{ marginRight: 10 }}
                        name='home'
                        size={22}
                        color='#fff'
                        onPress={() => this.props.navigation.navigate('Home')} />}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}    
                />

                    <WebView source={{uri: 'https://video-a-la-demande.orange.fr/#vod/home'}}/>
                   
             
                 </View>
                

            
        )
}
}

