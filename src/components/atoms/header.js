/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

function Header(props) {
    return (
        <View
            style={{
                height: '19%',
                width: '100%',
                backgroundColor: '#FFFFFF',
                shadowColor: '#000',
                zIndex: 1,
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.7,
                shadowRadius: 8,
                elevation: 5,
            }}>
            <Text
                style={{
                    marginTop: props.marginTop,
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontSize: props.fontSize,
                    fontFamily: 'Rubik',
                    fontWeight: 'bold',
                    zIndex: 1,
                }}>
                {props.title}
            </Text>
        </View>
    );
}

export default Header;
