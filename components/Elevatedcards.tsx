/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevatedcards</Text>
            <ScrollView horizontal={true} style={styles.Container} showsHorizontalScrollIndicator={false} >

                {/* <View style={styles.Container}> */}
                <View style={[styles.card, styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text>blue</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text>green</Text>
                </View>
                <View style={[styles.card, styles.card1]}>
                    <Text>Red2</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text>blue</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text>green</Text>
                </View>
                <View style={[styles.card, styles.card1]}>
                    <Text>Red2</Text>
                </View>
                {/* </View> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    Container: {
        // display: 'flex',
        // flexDirection: 'row',
        // gap: 10,
        padding: 8,
        // overflow: 'hidden',
        // backgroundColor: '#000000'
        // elevation: 54,
    },
    card1: {
        backgroundColor: '#d76565',
    },
    card2: {
        backgroundColor: '#65d77a',

    },

    card3: {
        backgroundColor: '#6565d7',
        // color: '#000000',


    },

    card: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 5,
        // borderRightColor: '#fffff',
        color: '#000000',
        borderRadius: 10,
    },
})