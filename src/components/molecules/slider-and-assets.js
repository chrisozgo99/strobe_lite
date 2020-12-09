/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {RangeSlider} from '_atoms';

function SliderAndAssets(props) {
    const [val, setVal] = useState(props.defaultVal);

    return (
        <View style={{width: '100%', marginTop: '20%'}}>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '3%',
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
                        marginTop: '1.6%',
                        flexDirection: 'row',
                        marginLeft: '-5%',
                    }}>
                    <View>
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
