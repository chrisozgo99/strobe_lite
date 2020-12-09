/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function NavBar(props) {
    return (
        <LinearGradient
            colors={['#9E8AF8', '#00EBCF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                // bottom: '-19.%',
                height: '10%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <TouchableHighlight
                style={{
                    paddingHorizontal: '18%',
                    paddingVertical: '4%',
                    marginBottom: '2%',
                }}
                underlayColor={'#9E8AF8'}
                activeOpacity={0.4}
                onPress={props.onPressBack}>
                <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight disabled={true}>
                <Text
                    style={{
                        fontSize: 62,
                        fontWeight: '200',
                        color: 'white',
                        paddingBottom: '23%',
                    }}>
                    |
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    paddingHorizontal: '18%',
                    paddingVertical: '4%',
                    marginBottom: '2%',
                }}
                underlayColor={'#00EBCF'}
                activeOpacity={0.4}
                onPress={props.onPressNext}>
                <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>Next</Text>
            </TouchableHighlight>
        </LinearGradient>
    );
}

export default NavBar;
