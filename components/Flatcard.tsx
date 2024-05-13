/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export class Flatcard extends Component {
    render() {
        return (
            <View>
                <Text style={Styles.headingText} >flatcard</Text>
                <View style={Styles.Container}>
                    <View style={[Styles.card, Styles.card1]} >
                        <Text >RED</Text>
                    </View>
                    <View style={[Styles.card, Styles.card2]} >
                        <Text >blue</Text>
                    </View>
                    <View style={[Styles.card, Styles.card3]} >
                        <Text >green</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Flatcard;

const Styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    Container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    card1: {
        backgroundColor: '#d76565',
    },
    card2: {
        backgroundColor: '#65d77a',

    },

    card3: {
        backgroundColor: '#6565d7',

    },

    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRightColor: '#fffff',
        color: 'black',
        borderRadius: 5,
    },
});
