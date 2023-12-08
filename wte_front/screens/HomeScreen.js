import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  WteTitle  from '../components/home/WteTitle';

export default function HomeScreen({ navigation, route}) {
    return (
      <View>
        <LinearGradient
            colors={['#9D61FE', '#FFBFE9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ width: '100%', height: '100%' }}
            >
            <WteTitle navigation={navigation} />
        </LinearGradient>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
