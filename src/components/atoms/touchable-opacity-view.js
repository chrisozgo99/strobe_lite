/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function TouchableOpacityView(props) {
    return (
        <LinearGradient
            colors={['#00EBCF', '#9E8AF8']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
                width: '80%',
                marginTop: '15%',
                marginHorizontal: '10%',
                borderRadius: 25,
                borderWidth: 1,
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <TouchableOpacity
                style={{
                    paddingVertical: '3%',
                    paddingHorizontal: '15%',
                    borderRadius: 25,
                }}
                onPress={props.onPress}>
                <Text style={{fontFamily: 'Rubik', fontSize: 18}}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default TouchableOpacityView;
