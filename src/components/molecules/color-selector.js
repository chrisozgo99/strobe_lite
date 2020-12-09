/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TouchableOpacitySVG} from '_atoms';

function ColorSelector(props) {
    const colors = props.colors;
    const colorSelector = colors.map((color) => {
        return (
            <View
                key={color.color}
                style={{
                    width: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: '4%',
                    shadowColor: '#000',
                    shadowOffset: {width: 5, height: 5},
                    shadowOpacity: 0.7,
                    shadowRadius: 8,
                    elevation: 5,
                }}>
                <TouchableOpacitySVG svg={color.svg} onPress={color.onPress} />
                <View
                    style={{marginTop: '2%', opacity: color.selected ? 1 : 0}}>
                    <TextInput
                        maxLength={50}
                        editable={color.selected}
                        placeholder={'Enter Text'}
                        onChangeText={color.onChangeText}
                    />
                </View>
            </View>
        );
    });

    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: '7%',
                paddingBottom: '18%',
                height: '50%',
            }}>
            {colorSelector}
        </View>
    );
}

export default ColorSelector;
