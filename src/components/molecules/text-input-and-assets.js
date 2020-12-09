/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, Text} from 'react-native';

import {TouchableOpacitySVG} from '_atoms';

import Decrease from '_assets/images/minus.svg';
import Increase from '_assets/images/plus.svg';

function TextInputAndAssets(props) {
    // const [val, setVal] = useState(0);

    return (
        <View
            style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20%',
            }}>
            <View style={{marginBottom: '3%'}}>
                <Text style={{fontSize: 20}}>TOTAL RUNTIME</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <TouchableOpacitySVG
                        svg={<Decrease />}
                        onPress={props.onDecrease}
                    />
                </View>
                <View
                    style={{
                        width: '40%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 0,
                    }}>
                    <View
                        style={{
                            borderColor: '#DDD',
                            borderWidth: 1,
                            borderRadius: 14,
                            paddingHorizontal: '12%',
                            paddingVertical: '4%',
                            shadowColor: '#DDD',
                            shadowOffset: {width: 1, height: 1},
                            shadowOpacity: 0.7,
                            shadowRadius: 0,
                            elevation: 5,
                        }}>
                        <TextInput
                            style={{fontSize: 22, fontFamily: 'Rubik'}}
                            keyboardType="decimal-pad"
                            value={props.val.toString()}
                            onChangeText={props.onChange}
                        />
                    </View>
                    <View style={{zIndex: 1, marginLeft: '-12%'}}>
                        <Text style={{fontSize: 22, fontFamily: 'Rubik'}}>
                            s
                        </Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacitySVG
                        svg={<Increase />}
                        onPress={props.onIncrease}
                    />
                </View>
            </View>
            <View style={{marginTop: '2%'}}>
                <Text style={{fontFamily: 'Rubik'}}>
                    (Enter "0" for infinite time)
                </Text>
            </View>
        </View>
    );
}

export default TextInputAndAssets;
