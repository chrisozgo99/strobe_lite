/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Platform} from 'react-native';
import {TouchableOpacitySVG} from '_atoms';

import Back from '_assets/images/SmallBackButton.svg';

function HeaderWithBackButton(props) {
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                height: '19%',
                width: '100%',
                backgroundColor: '#FFFFFF',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 5},
                shadowOpacity: 0.7,
                shadowRadius: 8,
                elevation: 5,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '20%',
                }}>
                <View
                    style={{
                        marginLeft: '3%',
                        marginTop: Platform.isPad ? '0%' : '2.9%',
                    }}>
                    <TouchableOpacitySVG
                        svg={<Back />}
                        onPress={() => {
                            props.navigation.navigate('StrobeLite');
                        }}
                    />
                </View>
                <View>
                    <Text
                        style={{
                            marginTop: Platform.isPad ? '0%' : '5%',
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: 34,
                            fontFamily: 'Rubik',
                            fontWeight: 'bold',
                            zIndex: 1,
                        }}>
                        {props.title}
                    </Text>
                </View>
                <View style={{opacity: 0, marginRight: '3%'}}>
                    <TouchableOpacitySVG svg={<Back />} />
                </View>
            </View>
        </View>
    );
}

export default HeaderWithBackButton;
