/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import {SportIcon} from '_molecules';

function SportIcons(props) {
    const icons = [
        {
            text: 'Basketball',
            png: require('_assets/images/Basketball.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Basketball',
                });
            },
        },
        {
            text: 'Soccer',
            png: require('_assets/images/Soccer.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Soccer',
                });
            },
        },
        {
            text: 'Football',
            png: require('_assets/images/Football.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Football',
                });
            },
        },
        {
            text: 'Boxing',
            png: require('_assets/images/Boxing.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Boxing',
                });
            },
        },
        {
            text: 'Hockey',
            png: require('_assets/images/Hockey.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Hockey',
                });
            },
        },
        {
            text: 'Tennis',
            png: require('_assets/images/Tennis.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Tennis',
                });
            },
        },
        {
            text: 'Weightlifting',
            png: require('_assets/images/Weightlifting.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Weightlifting',
                });
            },
        },
        {
            text: 'Rehabilitation',
            png: require('_assets/images/Rehabilitation.jpg'),
            onPress: () => {
                props.navigation.navigate('Videos', {
                    sport: 'Rehabilitation',
                });
            },
        },
    ];

    const buttons = icons.map((icon) => {
        return (
            <View
                key={icon.text}
                style={{
                    width: '37%',
                    height: '18%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    marginHorizontal: '6.5%',
                    marginVertical: '2.5%',
                    borderRadius: 15,
                }}>
                <SportIcon
                    png={icon.png}
                    text={icon.text}
                    onPress={icon.onPress}
                />
            </View>
        );
    });

    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>{buttons}</View>
    );
}

export default SportIcons;
