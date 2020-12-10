/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    Dimensions,
    Platform,
} from 'react-native';
import {TouchableOpacitySVG} from '_atoms';
import {StrobeScienceMessage} from '_molecules';

import Back from '_assets/images/BackButton.svg';
import Logo from '_assets/images/Logo.svg';

import LinearGradient from 'react-native-linear-gradient';

function StrobeScienceScreen({navigation}) {
    return (
        <View style={{height: '100%'}}>
            {Platform.OS !== 'android' ? null : (
                <LinearGradient
                    colors={['rgba(35,217,255,0.60)', 'rgba(158,138,248,0.60)']}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: -1,
                    }}
                />
            )}
            <SafeAreaView>
                <View>
                    <TouchableOpacitySVG
                        svg={<Back />}
                        onPress={() => {
                            navigation.navigate('StrobeLite');
                        }}
                    />
                </View>
                <View style={{marginBottom: '3%', marginTop: '2%'}}>
                    <Text
                        style={{
                            fontSize:
                                Dimensions.get('window').height === 667 ||
                                Dimensions.get('window').height === 736 ||
                                Platform.OS === 'android'
                                    ? 38
                                    : 42,
                            textAlign: 'center',
                            fontFamily: 'Rubik',
                        }}>
                        The Science Behind
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.8%',
                    }}>
                    <Image source={require('_assets/images/Logo.png')} />
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginHorizontal: '8%',
                    }}
                />
                <View>
                    <StrobeScienceMessage />
                </View>
            </SafeAreaView>
            {Platform.OS === 'android' ? null : (
                <LinearGradient
                    colors={['rgba(35,217,255,0.60)', 'rgba(158,138,248,0.60)']}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: -1,
                    }}
                />
            )}
        </View>
    );
}

export default StrobeScienceScreen;
