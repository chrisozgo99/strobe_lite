/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {StartStop, TouchableOpacitySVG} from '_atoms';
import {getColorsAndWords, getRandomColor} from '_utils';
import IdleTimerManager from 'react-native-idle-timer';
import ScreenBrightness from 'react-native-screen-brightness';

import Back from '_assets/images/BackButton.svg';

function StrobeScreen({navigation}) {
    var info = navigation.state.params;

    const [strobeStart, setStrobeStart] = useState(false);
    const [countdownStart, setCountdownStart] = useState(false);
    const [background, setBackground] = useState('white');
    const [time, setTime] = useState(info.time === 0 ? '∞' : info.time);
    const [gotInitialTime, setGotInitialTime] = useState(false);
    const [word, setWord] = useState('');
    var colorArray = getColorsAndWords(info.colorArray);

    var initialTime = useRef();

    useEffect(() => {
        ScreenBrightness.setBrightness(1);
        IdleTimerManager.setIdleTimerDisabled(true);
    });

    useEffect(() => {
        var countdownHelp;
        function countdown() {
            var countdownColors = ['#F5E653', '#47DF8F'];
            var countdownWords = ['Set...', 'Work!'];
            var i = 0;
            setBackground('#E75656');
            setWord('Ready?');
            countdownHelp = setInterval(function () {
                if (i < countdownColors.length) {
                    setBackground(countdownColors[i]);
                    setWord(countdownWords[i]);
                    i++;
                } else if ((i = countdownColors.length)) {
                    setWord('');
                    setStrobeStart(true);
                    setCountdownStart(false);
                    clearInterval(countdownHelp);
                }
            }, 1000);
        }
        if (countdownStart) {
            countdown();
        }
        return () => {
            clearInterval(countdownHelp);
        };
    }, [countdownStart]);

    useEffect(() => {
        function blinkOn() {
            const colorAndWord = getRandomColor(colorArray);
            setBackground(colorAndWord.color);
            setWord(colorAndWord.word);
        }

        function blinkOff() {
            if (info.delay !== 0) {
                setBackground('#F3F3F3');
                setWord('');
            } else {
                const colorAndWord = getRandomColor(colorArray);
                setBackground(colorAndWord.color);
                setWord(colorAndWord.word);
            }
        }

        var oldState = true;
        var updateInterval =
            info.delay === 0
                ? info.length * 1000
                : info.delay === 0.1
                ? 25
                : 50;
        function blink() {
            if (!gotInitialTime) {
                setGotInitialTime(true);
                initialTime.current = new Date().getTime();
            }
            var currentTime = new Date().getTime();
            var t = currentTime % ((info.delay + info.length) * 1000);
            var state;
            if (info.delay !== 0) {
                state = t < info.length * 1000 ? true : false;
            } else {
                state = !oldState;
            }
            //If it runs for infinite time
            if (info.time === 0) {
                if (state === oldState) {
                    return;
                }
                if (state) {
                    blinkOn();
                } else {
                    blinkOff();
                }
                oldState = state;
            } else {
                var currTime = new Date().getTime();
                //If it runs for a set amount of time
                while (currTime < initialTime.current + info.time * 1000) {
                    setTime(
                        (
                            (initialTime.current +
                                info.time * 1000 -
                                currTime) /
                            1000
                        ).toFixed(0),
                    );
                    if (state === oldState) {
                        return;
                    }
                    if (state) {
                        blinkOn();
                    } else {
                        blinkOff();
                    }
                    oldState = state;
                }
                setTime(0);
                setBackground('white');
                setWord('');
                setCountdownStart(false);
                setStrobeStart(false);
                setGotInitialTime(false);
            }
        }
        if (strobeStart) {
            var blinkInterval = setInterval(() => blink(), updateInterval);
        }
        return () => clearInterval(blinkInterval);
    }, [
        info.delay,
        info.length,
        info.time,
        strobeStart,
        gotInitialTime,
        colorArray,
    ]);

    return (
        <View
            style={{
                height: '100%',
                backgroundColor: background,
                width: '100%',
                justifyContent: 'space-between',
            }}>
            <SafeAreaView style={{height: '100%', width: '100%'}}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{marginTop: '15%', marginLeft: '5%'}}>
                        <TouchableOpacitySVG
                            svg={<Back />}
                            onPress={() => {
                                ScreenBrightness.setBrightness(0.5);
                                IdleTimerManager.setIdleTimerDisabled(false);
                                navigation.navigate('TimeConstraints');
                            }}
                        />
                    </View>
                    <View style={{marginTop: '14%', marginRight: '10%'}}>
                        <Text
                            style={{
                                fontSize: 50,
                                fontFamily: 'Kanit',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                            }}>
                            {strobeStart
                                ? time
                                : info.time === 0
                                ? '∞'
                                : info.time}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '40%',
                    }}>
                    <Text
                        style={{
                            fontSize: 65,
                            fontFamily: 'Kanit',
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                        }}>
                        {word}
                    </Text>
                </View>
                <View
                    style={{
                        bottom: '-85%',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}>
                    <StartStop
                        start={strobeStart}
                        countdown={countdownStart}
                        color={background}
                        onPressStart={() => {
                            setCountdownStart(true);
                        }}
                        onPressStop={() => {
                            setBackground('white');
                            setWord('');
                            setCountdownStart(false);
                            setStrobeStart(false);
                            setGotInitialTime(false);
                        }}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default StrobeScreen;
