import React from 'react';
import {View} from 'react-native';

import Slider from '@react-native-community/slider';

function RangeSlider(props) {
    return (
        <View style={{width: '100%'}}>
            <Slider
                style={{width: '93%'}}
                minimumValue={props.minVal}
                thumbTintColor="#9E8AF8"
                maximumValue={10}
                value={props.val}
                minimumTrackTintColor="#9E8AF8"
                maximumTrackTintColor="#9E8AF8"
                tapToSeek={true}
                onValueChange={props.onValChange}
            />
        </View>
    );
}

export default RangeSlider;
