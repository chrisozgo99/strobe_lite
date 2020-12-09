/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

function CommunityMessage(props) {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: '6%',
                marginVertical: '20%',
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: '500',
                    fontFamily: 'Kanit',
                    fontStyle: 'italic',
                    fontSize: 20,
                }}>
                We are in the process of gathering Community content for{' '}
                {props.sport.toLowerCase()}. It will be readily available soon.
                If you have a great video that you wish to contribute, don't
                hesitate to send it to us via social media!
            </Text>
        </View>
    );
}

export default CommunityMessage;
