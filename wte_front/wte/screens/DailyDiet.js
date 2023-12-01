import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  ExpandList  from '../components/home/ExpandList';
import style from "../components/home/wtetitle.style";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ModalSettings from '../components/home/ModalSettings';

export default function DailyDiet({ navigation }) {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const DATA = [
    {
        type_meal: 'Breakfast',
        title: 'Potatoes with cheese and eggs',
        ingredients: [
            { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Itemddddddddddddddddddddddddd' },
            { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Itemddddddddddddddddddddddddddddddd' },
            { id: 'bd7acbea-c1b1-346c2-aed5-3ad53abb28ba', title: 'First Item' },
            { id: '3ac68afc-c605-482d3-a4f8-fbd91aa97f63', title: 'Second Item' },
            { id: 'bd7acbea-44c1b1-346c2-aed5-3ad53abb28ba', title: 'First Item' },
            { id: '3ac68afc-c605-482d3-32a4f8-fbd91aa97f63', title: 'Second Item' },
            { id: 'bd7acbea-c1b1-3446c2-aed5-3ad53abb28ba', title: 'First Item' },
            { id: '3ac68afc-c605-482d3-a564f8-fbd91aa97f63', title: 'Second Item' },
        ],
    },
    {
        type_meal: 'Lunch',
        title: 'Chicken Salad',
        ingredients: [
            { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
            { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
        ],
    },
    {
      type_meal: 'Lunch',
      title: 'Chicken Salad',
      ingredients: [
          { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
          { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
      ],
  },
  {
    type_meal: 'Lunch',
    title: 'Chicken Salad',
    ingredients: [
        { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
        { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
    ],
},
{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},
{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},
{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},
{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},
{
  type_meal: 'Lunch',
  title: 'Chicken Salad',
  ingredients: [
      { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Grilled Chicken' },
      { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Mixed Greens' },
  ],
},
];
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
              <ScrollView>
                {DATA.map((item) => (
                    <ExpandList data={item}
                      key={item.type_meal}
                    />
                ))}
                <TouchableOpacity  
                style={{
                  margin: 30,
                  flex: 1,
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
                  backgroundColor:'white' }}>
                  <Icon name={'settings'} size={50} color="black" style={{
                    
                  }}
                  onPress={ ()=>setVisible(true)} />
                </TouchableOpacity>
              </ScrollView>
              <ModalSettings visible={visible} closeModal={closeModal} data={DATA}></ModalSettings>
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
