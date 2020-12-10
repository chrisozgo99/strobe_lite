/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    Platform,
} from 'react-native';

function LandingButtons(props) {
    const buttons = [
        {
            name: '         Start         ',
            nav: 'Colors',
        },
        {
            name: 'StrobeScience',
            nav: 'StrobeScience',
        },
        {
            name: '   Community   ',
            nav: 'Community',
        },
        {
            name: '      Tutorials      ',
            nav: 'Tutorials',
        },
    ];

    const landingButtons = buttons.map((button) => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                key={button.name}>
                <TouchableHighlight
                    style={{
                        paddingVertical:
                            Platform.isPad || Platform.OS === 'android'
                                ? '5%'
                                : '10%',
                        paddingHorizontal: '30%',
                    }}
                    activeOpacity={0.6}
                    underlayColor="#9E8AF8"
                    onPress={() => {
                        props.navigation.navigate(button.nav);
                    }}>
                    <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>
                        {button.name}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    });

    return (
        <View
            style={{
                marginTop:
                    Dimensions.get('window').height === 667 ||
                    Dimensions.get('window').height === 736
                        ? '7%'
                        : '20%',
            }}>
            {landingButtons}
        </View>
    );
}

export default LandingButtons;
