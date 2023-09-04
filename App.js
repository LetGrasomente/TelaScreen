import { StatusBar } from "expo-status-bar";
//import { StyleSheet, Text, View } from "react-native-web";
import react from 'react';

import { SafeAreaView, StyleSheet } from "react-native-web";
import TelaScreen from './src/TelaScreen';
const App = () => {
    return (
      <SafeAreaView>
            <TelaScream/>
      </SafeAreaView>
    );
    };

const styles = StyleSheet.create ({
    container: {
            flex: 1,
    },
});
    
export default App;

