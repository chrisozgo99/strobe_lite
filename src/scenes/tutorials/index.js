/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Platform} from 'react-native';

import {HeaderWithBackButton} from '_atoms';

import LinearGradient from 'react-native-linear-gradient';

import {WebView} from 'react-native-webview';

function TutorialsScreen({navigation}) {
    return (
        <View style={{height: '100%', width: '100%'}}>
            {Platform.OS === 'android' ? (
                <LinearGradient
                    colors={['#00EBCF', '#9E8AF8']}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.6,
                        zIndex: -1,
                    }}
                />
            ) : null}
            <HeaderWithBackButton navigation={navigation} title="TUTORIALS" />
            <View
                style={{position: 'relative', marginTop: '50%', height: '25%'}}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: 'Rubik',
                        fontWeight: '600',
                        marginBottom: '5%',
                    }}>
                    How to use the app:
                </Text>

                <WebView
                    style={{
                        width: '80%',
                        marginHorizontal: '10%',
                        borderRadius: 20,
                    }}
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction
                    source={{uri: 'https://www.youtube.com/embed/BEiBCLr98dg'}}
                />
            </View>
            {Platform.OS === 'android' ? null : (
                <LinearGradient
                    colors={['#00EBCF', '#9E8AF8']}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.6,
                        zIndex: -1,
                    }}
                />
            )}
        </View>
    );
}

export default TutorialsScreen;
