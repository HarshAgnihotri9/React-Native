/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, useColorScheme, Image, Button, ScrollView } from 'react-native';
import Flatcard from './components/Flatcard';
import Elevatedcards from './components/Elevatedcards';

const AppPro = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <Elevatedcards />
      </ScrollView>

    </SafeAreaView>
  );
};

export default AppPro;
