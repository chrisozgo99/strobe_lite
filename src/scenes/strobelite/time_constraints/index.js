/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Alert, Dimensions} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '_atoms';
import {SliderAndAssets, TextInputAndAssets, NavBar} from '_molecules';
import BG from '_assets/images/SportsBG.svg';

function TimeConstraintsScreen({navigation}) {
    const colorArray = navigation.state.params.colorArray;
    // console.log(colorArray);
    const [lengthVal, setLengthVal] = useState(1.0);
    const [delayVal, setDelayVal] = useState(0.0);
    const [timeVal, setTimeVal] = useState(0);

    return (
        <View style={{height: '100%', width: '100%', flex: 1}}>
            <View style={{position: 'absolute', flex: 1}}>
                <BG />
            </View>
            <Header
                title={'COLOR\nTIME CONSTRAINTS'}
                marginTop={
                    Dimensions.get('window').height === 667 ||
                    Dimensions.get('window').height === 736
                        ? '13%'
                        : '22%'
                }
                fontSize={27}
            />
            <KeyboardAwareScrollView>
                <View>
                    <SliderAndAssets
                        title={'LENGTH'}
                        minVal={0.1}
                        defaultVal={1.0}
                        val={lengthVal.toFixed(1)}
                        changeVal={(value) => {
                            setLengthVal(parseFloat(value, 10));
                        }}
                    />
                    <View style={{width: '100%'}}>
                        <SliderAndAssets
                            title={'DELAY'}
                            minVal={0}
                            defaultVal={0}
                            val={delayVal.toFixed(1)}
                            changeVal={(value) => {
                                setDelayVal(parseFloat(value, 10));
                            }}
                        />
                    </View>

                    <TextInputAndAssets
                        val={timeVal}
                        onDecrease={() => {
                            if (timeVal - 5 > 0) {
                                setTimeVal(timeVal - 5);
                            } else {
                                setTimeVal(0);
                            }
                        }}
                        onChange={(text) => {
                            setTimeVal(parseInt(text, 10));
                        }}
                        onIncrease={() => {
                            setTimeVal(parseInt(timeVal, 10) + 5);
                        }}
                    />
                </View>
            </KeyboardAwareScrollView>

            <NavBar
                onPressBack={() => navigation.navigate('Colors')}
                onPressNext={() => {
                    if (
                        timeVal >= 0 &&
                        typeof timeVal === 'number' &&
                        lengthVal > 0 &&
                        typeof lengthVal === 'number' &&
                        delayVal >= 0 &&
                        typeof delayVal === 'number'
                    ) {
                        navigation.navigate('Strobe', {
                            colorArray,
                            length: parseFloat(lengthVal.toFixed(1), 10),
                            delay: parseFloat(delayVal.toFixed(1), 10),
                            time: timeVal,
                        });
                    } else {
                        Alert.alert(
                            'Please enter valid values for time constraints',
                        );
                    }
                }}
            />
        </View>
    );
}

export default TimeConstraintsScreen;
