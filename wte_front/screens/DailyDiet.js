import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  ExpandList  from '../components/home/ExpandList';
import style from "../components/home/wtetitle.style";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ModalSettings from '../components/home/ModalSettings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


export default function DailyDiet({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [mealCategories, setMealCategories] = useState(['Breakfast', 'Lunch']);
  const [data, setData] = useState();
  const closeModal = () => {
    setVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const savedUserCategories = await AsyncStorage.getItem('mealCategories');
        if(savedUserCategories !== null) {
          setMealCategories(savedUserCategories);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };
    fetchData();
    mealUrl = 'http://10.0.2.2:8000/meals/' + mealCategories.join(',') 
    axios.get(mealUrl)
      .then(response => {
        setData(response.data);
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('There was a problem with the request:', error);
      });
  }, []);
//   const DATA = [
//     {
//         type_meal: 'Breakfast',
//         title: 'Potatoes with cheese and eggs',
//         ingredients: [
//             { id: 'bd7acbea-dc1b1-46c2-aed5-3ad53abb28ba', title: 'First Itemddddddddddddddddddddddddd' },
//             { id: '3ac68afc-c605-d48d3-a4f8d-fbd91aa97f63', title: 'Second Itemddddddddddddddddddddddddddddddd' },
//             { id: 'bd7acbea-c1b1-346c2-aed5-3ad53ddabb28ba', title: 'First Item' },
//             { id: '3ac68afc-c605-482d3d-a4f8-fbd91aa97f63', title: 'Second Item' },
//             { id: 'bd7acbea-44c1b1-346c2-aedd5-3ad53abb28ba', title: 'First Item' },
//             { id: '3ac68afc-c605-482d3-32a4df8-fbd91aa97f63', title: 'Second Item' },
//             { id: 'bd7acbea-c1b1-3446c2-aedd5-3ad53abb28ba', title: 'First Item' },
//             { id: '3ac68afc-c605-482d3-a56d4f8-fbd91aa97f63', title: 'Second Item' },
//         ],
//     },
//     {
//         type_meal: 'Lunch',
//         title: 'Chicken Salad',
//         ingredients: [
//             { id: 'bd7acbea-c1b1-46ddddc2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
//             { id: '3ac68afc-c60dddd5-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
//         ],
//     },
// //     {
// //       type_meal: 'Lunch',
// //       title: 'Chicken Salad',
// //       ingredients: [
// //           { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //           { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //       ],
// //   },
// //   {
// //     type_meal: 'Lunch',
// //     title: 'Chicken Salad',
// //     ingredients: [
// //         { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //         { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //     ],
// // },
// // {
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },
// // {
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },
// // {
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },
// // {
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },{
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },
// // {
// //   type_meal: 'Lunch',
// //   title: 'Chicken Salad',
// //   ingredients: [
// //       { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
// //       { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
// //   ],
// // },
// ];
  return (
    <View>
        <LinearGradient
            colors={['#9D61FE', '#FFBFE9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ width: '100%', height: '100%' }}
            >
            <View style={styles.app}>
              <View style={{ marginTop: 75, marginBottom: 40 }}>
                <Text style={style.appName}>WTE </Text>
                <Text style={style.appName}>What to eat</Text>
              </View>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ExpandList data={item} key={item.meal_category} />
                  )}
                ListFooterComponent={() => (
                  <TouchableOpacity
                    style={{
                      margin: 30,
                      height: 70,
                      width: 70,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 90,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.25,
                      shadowRadius: 10,
                      elevation: 3,
                      backgroundColor: 'white',
                    }}>
                    <Icon name={'settings'} size={50} color="black" onPress={() => setVisible(true)} />
                  </TouchableOpacity>
                )}
              />
              <ModalSettings visible={visible} closeModal={closeModal} data={data}></ModalSettings>
            </View>
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
  app: {
    flex: 1,
    alignItems: "center",
  },
});
