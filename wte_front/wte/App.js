import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DailyDiet from './screens/DailyDiet';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import { useCallback } from 'react';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    KaushanScript_400Regular,
  });

  if(!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="DailyDiet" component={DailyDiet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
