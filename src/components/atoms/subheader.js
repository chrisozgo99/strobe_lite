/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacitySVG} from '_atoms';

import Back from '_assets/images/SmallBackButton.svg';

function Subheader(props) {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'grey',
            }}>
            <View style={{marginLeft: '2%', marginVertical: '2%'}}>
                <TouchableOpacitySVG
                    svg={<Back />}
                    onPress={() => {
                        props.navigation.navigate(props.nav);
                    }}
                />
            </View>
            <View style={{marginVertical: '2%'}}>
                <Text
                    style={{
                        fontFamily: 'Kanit',
                        fontStyle: 'italic',
                        fontWeight: '600',
                        fontSize: 25,
                    }}>
                    {props.title}
                </Text>
            </View>
            <View style={{opacity: 0, marginLeft: '2%'}}>
                <TouchableOpacitySVG svg={<Back />} />
            </View>
        </View>
    );
}

export default Subheader;
