/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import {Header, Subheader, CommunityMessage} from '_atoms';
import {BasketballVideos} from '_molecules';

import LinearGradient from 'react-native-linear-gradient';

function VideosScreen({navigation}) {
    console.log(navigation.state.params.sport);
    var sport = navigation.state.params.sport;
    return (
        <View style={{height: '100%', width: '100%'}}>
            <Header title="COMMUNITY" marginTop="23%" fontSize={32} />
            <Subheader title={sport} navigation={navigation} nav="Sports" />
            {sport === 'Basketball' ? (
                <BasketballVideos />
            ) : (
                <CommunityMessage sport={sport} />
            )}
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

export default VideosScreen;
