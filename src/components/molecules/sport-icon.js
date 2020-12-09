/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

import {TouchableOpacityPNG} from '_atoms';

function SportIcon(props) {
    return (
        <View
            style={{
                height: '100%',
                width: '100%',
                borderRadius: 15,
            }}>
            <View style={{}}>
                <TouchableOpacityPNG
                    png={props.png}
                    text={props.text}
                    onPress={props.onPress}
                />
            </View>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '-15%',
                }}>
                <Text
                    style={{
                        fontFamily: 'Kanit',
                        fontWeight: '600',
                        fontSize: 17,
                    }}>
                    {props.text}
                </Text>
            </View>
        </View>
    );
}

export default SportIcon;
