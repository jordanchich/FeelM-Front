import React from 'react';
import {
    View,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import AnimatedLoader from "react-native-animated-loader";
import { connect } from 'react-redux';
class FaceFeelM extends React.Component {
    state = {
        permision: null,
        type: Camera.Constants.Type.back,
        Name: '',
        LastName: '',
        picture: [],
        visible: false
    };

    async componentDidMount() {
        var { status } = await Permissions.askAsync(Permissions.CAMERA);
        var permision = (status === 'granted') ? true : false;
        this.setState({ permision });
    }

    onPictureSaved = async photo => {
        this.setState({
            visible: !this.state.visible
        });
        
        // console.log(photo.uri);

        // console.log(photo.width);
        // console.log(photo.height);

        var data = new FormData();

        data.append('picture', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: 'avatar.jpg',
        });

        fetch("https://feelmapp.herokuapp.com/upload", {
            method: 'post',
            body: data
        }).then(response => {
            
            return response.json();
            
        }).then(pictureSave => {
            setTimeout(() => {
                this.setState({
                    visible: false
                });
                this.props.navigation.navigate('Scan')
            });
            // console.log('Données total =======',pictureSave)
            // console.log('Microsoft Azure =======', pictureSave.jsonResponse[0].faceAttributes)
            // console.log('Cloudinary =======', pictureSave.result)
            this.props.OnAzure(pictureSave.jsonResponse[0].faceAttributes)
            this.props.OnCloud(pictureSave.result)
            
        }).catch(err => {
            console.log(err);
        });

        

    }
    render() {
        if (this.state.permision === null) {
            return <View />;
        }
        else if (this.state.permision === false) {
            return <Text>Vous n'avez pas accès à la caméra</Text>;
        } 
        return (
            // // // // // View Principale  // // // // // //
            <View style={styles.container}>


                <Camera
                    ref={ref => { this.camera = ref }}
                    style={{ flex: 1, }} type={this.state.type}
                >   
                    <Header barStyle="light-content"
                        leftComponent={<Icon style={{ marginLeft: 10 }}
                            name='times'
                            size={25}
                            color='#fff'
                            onPress={() => this.props.navigation.goBack()} />}
                        centerComponent={{ text: "FaceFeelM", style: { color: '#fff', fontSize: 25, fontWeight: 'bold' } }}
                        rightComponent={<Icon style={{ marginRight: 10 }}
                            name='bolt'
                            size={25}
                            color='#fff'
                            onPress={() => this.props.navigation.goBack()} />}
                        containerStyle={{ backgroundColor: 'rgba(0, 0,0, 0)', justifyContent: 'space-around', borderBottomColor: 'rgba(0, 0,0, 0)' }}
                    />
                    <View style={styles.lottie}>
                        <AnimatedLoader
                            visible={this.state.visible}
                            overlayColor="rgba(19,23,47,0.9)"
                            source={require("../../assets/animations/animation-w128-h128.json")}
                            animationStyle={styles.lottie}
                            speed={1}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        
                        <TouchableOpacity style={[styles.Close, styles.red]} onPress={() => this.props.navigation.goBack()} >
                            <SvgUri source={require('../../assets/close.svg')} width="28"
                                height="28" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.BackCamera}>
                        <Button 

                            icon={
                                <Icon
                                    name="camera"
                                    size={30}
                                    color="#fff"
                                />
                            }
                            type="clear"
                            // title=" Discover Now"
                            onPress={() => {
                                if (this.camera) {
                                    this.camera.takePictureAsync({
                                        onPictureSaved: this.onPictureSaved,
                                        quality: 0.4,
                                        base64: true,
                                        exif: true
                                    });
                                }
                            }}
                        />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.FrontCamera, styles.green]} >
                            <Icon
                                name="retweet"
                                size={30}
                                color="#fff"
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                    });
                                }}
                            />
                        </TouchableOpacity>
                        
                    </View>

                </Camera>



            </View>

        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        OnAzure: function (azureData) {
            dispatch({ type: 'azure', azureData }
            )

        },
        OnCloud: function (cloudinaryData) {
            dispatch({ type: 'cloud', cloudinaryData }
            )
            // console.log("detailFilm ======>>>", detailFilm)
        }
    }
}
export default connect(null, mapDispatchToProps)(FaceFeelM);
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    inputs: {
        height: '45%',
        marginLeft: 10,
        borderBottomColor: '#000',
    },
    lottie: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    type: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    
    BackCamera: {
        width: '20%', marginBottom: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255,255, 0.2)", borderRadius: 50,
        borderWidth: 5, borderColor: "#fff", shadowColor: 'rgba(0, 0,0, 0.8)',
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 10,
        shadowOffset: {
            width: 1,
            height: 5
        }
    },
    FrontCamera: {
        marginBottom: 90,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',

    },
    green: {
        width: 50,
        height: 50,
        marginLeft:25,
        backgroundColor: '#3DB39E',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#3DB39E',
    },
    Close: {
        marginBottom: 90,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',

    },
    red: {
        width: 50,
        height: 50,
        marginRight: 25,
        backgroundColor: '#DD2E44',
        borderRadius: 75,
        borderWidth: 6,
        borderColor: '#DD2E44',
    },


});