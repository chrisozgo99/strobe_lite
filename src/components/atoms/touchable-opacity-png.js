/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

function TouchableOpacityPNG(props) {
    return (
        <View style={{}}>
            <TouchableOpacity
                style={{
                    borderRadius: 0,
                }}
                onPress={props.onPress}>
                <View style={{borderRadius: 40}}>
                    <Image
                        style={{
                            width: '86%',
                            height: '93%',
                            marginHorizontal: '7%',
                            marginTop: '2%',
                            resizeMode: 'contain',
                            borderRadius: 10,
                        }}
                        source={props.png}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TouchableOpacityPNG;
