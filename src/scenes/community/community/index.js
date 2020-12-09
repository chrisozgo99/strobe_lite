/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {HeaderWithBackButton, TouchableOpacityView} from '_atoms';

import LinearGradient from 'react-native-linear-gradient';

function CommunityScreen({navigation}) {
    return (
        <View style={{height: '100%'}}>
            <HeaderWithBackButton navigation={navigation} title="COMMUNITY" />
            <View
                style={{
                    marginTop: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                }}>
                <Text
                    style={{
                        color: 'rgb(141, 58, 226)',
                        fontFamily: 'Rubik',
                        fontSize: 24,
                        fontWeight: '700',
                        opacity: 1,
                    }}>
                    What is the Community?
                </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginHorizontal: '8%',
                }}
            />
            <View
                style={{
                    marginTop: '3%',
                    marginHorizontal: '3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center'}}>
                    The Community is a platform for StrobeLite users to show off
                    the ways they are using the app in their workouts. It is
                    meant as a place for athletes to draw inspiration for their
                    own drills as well as create new applications for StrobeLite
                    that have never been thought of before. The StrobeLite
                    Community will collectivly innovate, revolutionize, and
                    refine training techniques for years to come. To submit a
                    video to the Community, DM us on Instagram
                    (@strobelitetraining), Twitter (@StrobeLite2019), Facebook
                    (StrobeLite), or email strobelitetraining@gmail.com. Also,
                    make sure to check out our YouTube Channel, StrobeLite
                    Training.
                </Text>
            </View>
            <View>
                <TouchableOpacityView
                    text="Visit the Community >"
                    onPress={() => navigation.navigate('Sports')}
                />
            </View>
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
                }}
            />
        </View>
    );
}

export default CommunityScreen;
