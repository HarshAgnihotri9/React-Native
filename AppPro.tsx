/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, View,StyleSheet,useColorScheme} from 'react-native';

function AppPro() :JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      {/* <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello harsh</Text> */}
        {/* <Text style={styles.whiteText}>  Hello World</Text> */}
  <View style={styles.container}>
    <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello-World </Text>
    {/* <Text style={styles.whiteText}>Hello-Worljhsdbkrjb  </Text> */}

  </View>
      {/* </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container:{
        // flex:1,
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    whiteText:{
        color:'#fffff',
    },
    darkText:{
        color:'#000000',
    },
});
export default AppPro;
