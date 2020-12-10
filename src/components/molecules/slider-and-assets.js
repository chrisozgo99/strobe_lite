/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, Dimensions, Platform} from 'react-native';
import {RangeSlider} from '_atoms';

function SliderAndAssets(props) {
    const [val, setVal] = useState(props.defaultVal);

    return (
        <View
            style={{
                width: '100%',
                marginTop:
                    Dimensions.get('window').height === 667 ||
                    Dimensions.get('window').height === 736 ||
                    Platform.isPad ||
                    Platform.OS === 'android'
                        ? '12%'
                        : '20%',
            }}>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: Platform.OS === 'android' ? '8%' : '3%',
                }}>
                <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>
                    {props.title}
                </Text>
            </View>
            <View
                style={{flexDirection: 'row', width: '80%', marginLeft: '10%'}}>
                <View style={{flexDirection: 'row'}}>
                    <RangeSlider
                        minVal={props.minVal}
                        val={props.defaultVal}
                        onValChange={props.changeVal}
                    />
                </View>
                <View
                    style={{
                        marginTop: Platform.OS === 'android' ? '0%' : '1.6%',
                        marginBottom: Platform.OS === 'android' ? '-5%' : '0%',
                        flexDirection: 'row',
                        marginLeft: '-5%',
                    }}>
                    <View
                        style={{
                            marginTop:
                                Platform.OS === 'android' ? '-20%' : '0%',
                        }}>
                        <TextInput
                            style={{fontSize: 22, fontFamily: 'Rubik'}}
                            keyboardType="decimal-pad"
                            value={props.val}
                            onChangeText={props.changeVal}
                        />
                    </View>
                    <View>
                        <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>
                            s
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SliderAndAssets;
