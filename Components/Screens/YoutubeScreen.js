import React, { Component } from 'react'
import { WebView, View } from 'react-native'
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class YoutubeScreen extends Component {
    
    render() {
        var idMovie = this.props.LinkTeaser.films.id;
        console.log(idMovie);
        var MovieName = this.props.LinkTeaser.films.title
        console.log(MovieName)
        return (
            <View style={{ flex: 1 }}>
                <Header
                    barStyle="light-content"
                    leftComponent={<Icon style={{ marginLeft: 10 }}
                        name='chevron-left'
                        size={25}
                        color='#fff'
                        onPress={() => this.props.navigation.goBack()} />}
                    centerComponent={{ text: MovieName, style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                    containerStyle={{ backgroundColor: '#13172F', justifyContent: 'space-around', borderBottomColor: '#13172F' }}
                />
                <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled={true}
                    source={{
                        uri: 'https://www.youtube.com/results?search_query=' + MovieName + ' ' + 'Bande annonce VO' }}
                />
            </View>
        )
    }
}
function mapStateToProps(state) {
    // console.log('State =====',state)
    return { LinkTeaser: state.Teaser };
}

export default connect(
    mapStateToProps,
    null,
)(YoutubeScreen);
