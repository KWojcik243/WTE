import { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { WteTitle } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <LinearGradient
            colors={['#9D61FE', '#FFBFE9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
            >
            <SafeAreaView >
                <Stack.Screen
                options={{
                    headerShown: false}}/>
                  
                <WteTitle/>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    homeText: {
      color: 'black',  // Ustaw kolor tekstu na czarny
      fontSize: 24,     // Ustaw rozmiar tekstu na 24 punkty (możesz dostosować do swoich preferencji)
    },
  });

export default Home;