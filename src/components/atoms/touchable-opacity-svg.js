import React from 'react';
import {View, TouchableOpacity} from 'react-native';

function TouchableOpacitySVG(props) {
    return (
        <View style={props.buttonStyles}>
            <TouchableOpacity onPress={props.onPress}>
                {props.svg}
            </TouchableOpacity>
        </View>
    );
}

export default TouchableOpacitySVG;
