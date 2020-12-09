/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, View, Dimensions} from 'react-native';
import {Header} from '_atoms';
import {ColorSelector, NavBar} from '_molecules';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Blue from '_assets/images/blue.svg';
import BlueSelect from '_assets/images/blueselect.svg';

import Purple from '_assets/images/purple.svg';
import PurpleSelect from '_assets/images/purpleselect.svg';

import Red from '_assets/images/red.svg';
import RedSelect from '_assets/images/redselect.svg';

import Green from '_assets/images/green.svg';
import GreenSelect from '_assets/images/greenselect.svg';

import Yellow from '_assets/images/yellow.svg';
import YellowSelect from '_assets/images/yellowselect.svg';

import Orange from '_assets/images/orange.svg';
import OrangeSelect from '_assets/images/orangeselect.svg';

import BG from '_assets/images/SportsBG.svg';

function ColorsScreen({navigation}) {
    const [blueSelect, setBlueSelect] = useState(false);
    const [purpleSelect, setPurpleSelect] = useState(false);
    const [redSelect, setRedSelect] = useState(false);
    const [greenSelect, setGreenSelect] = useState(false);
    const [yellowSelect, setYellowSelect] = useState(false);
    const [orangeSelect, setOrangeSelect] = useState(false);

    const [blueWord, setBlueWord] = useState('');
    const [purpleWord, setPurpleWord] = useState('');
    const [redWord, setRedWord] = useState('');
    const [greenWord, setGreenWord] = useState('');
    const [yellowWord, setYellowWord] = useState('');
    const [orangeWord, setOrangeWord] = useState('');

    var colorArray = [
        {
            blue: {
                selected: blueSelect,
                word: blueWord,
            },
        },
        {
            purple: {
                selected: purpleSelect,
                word: purpleWord,
            },
        },
        {
            red: {
                selected: redSelect,
                word: redWord,
            },
        },
        {
            green: {
                selected: greenSelect,
                word: greenWord,
            },
        },
        {
            yellow: {
                selected: yellowSelect,
                word: yellowWord,
            },
        },
        {
            orange: {
                selected: orangeSelect,
                word: orangeWord,
            },
        },
    ];

    const colors = [
        {
            color: 'Blue',
            svg: blueSelect ? <BlueSelect /> : <Blue />,
            selected: blueSelect,
            onPress: () => {
                setBlueSelect(!blueSelect);
            },
            onChangeText: (text) => {
                setBlueWord(text);
            },
        },
        {
            color: 'Purple',
            svg: purpleSelect ? <PurpleSelect /> : <Purple />,
            selected: purpleSelect,
            onPress: () => {
                setPurpleSelect(!purpleSelect);
            },
            onChangeText: (text) => {
                setPurpleWord(text);
            },
        },
        {
            color: 'Red',
            svg: redSelect ? <RedSelect /> : <Red />,
            selected: redSelect,
            onPress: () => {
                setRedSelect(!redSelect);
            },
            onChangeText: (text) => {
                setRedWord(text);
            },
        },
        {
            color: 'Green',
            svg: greenSelect ? <GreenSelect /> : <Green />,
            selected: greenSelect,
            onPress: () => {
                setGreenSelect(!greenSelect);
            },
            onChangeText: (text) => {
                setGreenWord(text);
            },
        },
        {
            color: 'Yellow',
            svg: yellowSelect ? <YellowSelect /> : <Yellow />,
            selected: yellowSelect,
            onPress: () => {
                setYellowSelect(!yellowSelect);
            },
            onChangeText: (text) => {
                setYellowWord(text);
            },
        },
        {
            color: 'Orange',
            svg: orangeSelect ? <OrangeSelect /> : <Orange />,
            selected: orangeSelect,
            onPress: () => {
                setOrangeSelect(!orangeSelect);
            },
            onChangeText: (text) => {
                setOrangeWord(text);
            },
        },
    ];

    return (
        <View style={{height: '100%'}}>
            <View style={{position: 'absolute', height: '100%'}}>
                <BG />
            </View>
            <Header
                title={'SELECT\nYOUR COLORS'}
                marginTop={
                    Dimensions.get('window').height === 667 ||
                    Dimensions.get('window').height === 736
                        ? '13%'
                        : '22%'
                }
                fontSize={27}
            />
            <KeyboardAwareScrollView>
                <ColorSelector colors={colors} />
            </KeyboardAwareScrollView>
            <NavBar
                onPressBack={() => navigation.navigate('Landing')}
                onPressNext={() => {
                    if (
                        !blueSelect &&
                        !purpleSelect &&
                        !redSelect &&
                        !greenSelect &&
                        !yellowSelect &&
                        !orangeSelect
                    ) {
                        Alert.alert(
                            'Select at least one color before advancing',
                        );
                    } else {
                        navigation.navigate('TimeConstraints', {
                            colorArray,
                        });
                    }
                }}
            />
        </View>
    );
}

export default ColorsScreen;
