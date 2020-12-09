/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function StartStop(props) {
    if (props.start || props.countdown) {
        return (
            <TouchableOpacity
                style={{
                    borderRadius: 25,
                    width: '90%',
                    height: '7%',
                    marginHorizontal: '5%',
                }}
                onPress={props.onPressStop}>
                <View
                    style={{
                        backgroundColor: 'black',
                        width: '100%',
                        height: '100%',
                        borderRadius: 25,
                        borderWidth: 1,
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.25,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Rubik',
                            fontSize: 20,
                            fontWeight: '500',
                            color: props.color,
                        }}>
                        Stop
                    </Text>
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    borderRadius: 25,
                    width: '90%',
                    height: '7%',
                    marginHorizontal: '5%',
                }}
                onPress={props.onPressStart}>
                <LinearGradient
                    colors={['#00EBCF', '#9E8AF8']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 25,
                        borderWidth: 1,
                        position: 'absolute',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8,
                    }}>
                    <Text
                        style={{
                            fontFamily: 'Rubik',
                            fontSize: 20,
                            fontWeight: '500',
                        }}>
                        Start
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

export default StartStop;
