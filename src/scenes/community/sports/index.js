/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Header, Subheader} from '_atoms';
import {SportIcons} from '_organisms';

import LinearGradient from 'react-native-linear-gradient';

function SportsScreen({navigation}) {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <Header title="COMMUNITY" marginTop="23%" fontSize={32} />
            <Subheader
                title="Select your sport"
                navigation={navigation}
                nav="Community"
            />
            <SportIcons navigation={navigation} />
            <LinearGradient
                colors={['#00EBCF', '#9E8AF8']}
                style={{
                    width: '100%',
                    position: 'absolute',
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: -1,
                    opacity: 0.6,
                }}
            />
        </View>
    );
}

export default SportsScreen;
