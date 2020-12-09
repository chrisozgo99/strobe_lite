/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Platform} from 'react-native';
import {LandingButtons} from '_molecules';
import BG from '_assets/images/HomeBG1024x1366.svg';
import Logo from '_assets/images/Logo_1.svg';
// import SplashScreen from 'react-native-splash-screen';

function LandingScreen({navigation}) {
    // useEffect(() => {
    //     SplashScreen.hide();
    // });
    return (
        <View style={{width: '100%'}}>
            <View style={{position: 'absolute', width: '100%'}}>
                <BG />
            </View>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: Platform.isPad ? '20%' : '30%',
                }}>
                <Logo />
            </View>
            <LandingButtons navigation={navigation} />
        </View>
    );
}

export default LandingScreen;
