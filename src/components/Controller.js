import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen');

import { colors } from '../utilities/style';

export default function Controller({
    isRunning,
    handleStart,
    handleLap,
    handleStop,
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.buttonContainer, { backgroundColor: colors.color4 }]}
                onPress={() => handleStop()}>
                <FontAwesome5 name="stop" color={'#fff'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonContainer, { backgroundColor: colors.color2 }]}
                onPress={() => handleStart()}>
                <FontAwesome5
                    name={isRunning ? 'pause' : 'play'}
                    color={colors.color3}
                    size={20}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonContainer, { backgroundColor: colors.color4 }]}
                onPress={() => handleLap()}>
                <FontAwesome5 name="step-forward" color={'#fff'} size={20} />

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
    },
    buttonContainer: {
        height: 70,
        width: 70,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
});