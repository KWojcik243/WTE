import { useState } from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { WteTitle } from '../components';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeP from './screens/home.jsx';

const Stack = createNativeStackNavigator();
const Home = () => {

    return (
        <NavigationContainer independent={true} screenOptions={{
            headerShown: false,
        }}>
            <Stack.Navigator  screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen screenOptions={{
                    headerShown: false,
                }} name="Home" component={HomeP}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

const styles = StyleSheet.create({
    homeText: {
      color: 'black',  // Ustaw kolor tekstu na czarny
      fontSize: 24,     // Ustaw rozmiar tekstu na 24 punkty (możesz dostosować do swoich preferencji)
    },
  });

export default Home;