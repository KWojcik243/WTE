import React, { useState } from 'react'
import { Modal, Text, View, TouchableOpacity, ScrollView, StyleSheet, } from "react-native";
import { xorBy } from 'lodash'
import FONT from "../../constants/theme";
import Icon from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import SelectBox from 'react-native-multi-selectbox'
const ModalSettings = (props) => {
    const [selectedTeams, setSelectedTeams] = useState([])
    const K_OPTIONS = [
        {
          item: 'Breakfast',
          id: 'BF',
        },
        {
          item: 'Lunch',
          id: 'LN',
        },
        {
          item: 'Dinner',
          id: 'DN',
        },
      ]
      
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}>
            <View style={style.modal}>
                <View style={style.box}>
                    <TouchableOpacity
                        onPress={() => props.closeModal()} 
                        style={{
                        alignSelf: 'flex-end', 
                        marginRight: 5, 
                        marginTop: 5
                    }}>
                    <Icon name={'cross'} size={50} color="black"/>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 30,
                        fontFamily: FONT.regular,
                        textAlign: 'center',
                    }}>Settings</Text>
                    <View style={{
                        margin:20,
                    }}>
                        <SelectBox
                            label="Select multiple"
                            options={K_OPTIONS}
                            selectedValues={selectedTeams}
                            onMultiSelect={onMultiChange()}
                            onTapClose={onMultiChange()}
                            isMulti
                            labelStyle={style.labelStyle}  
                            inputFilterStyle={style.inputFilterStyle}
                            multiOptionContainerStyle={style.multiOptionContainerStyle}
                            multiOptionsLabelStyle={style.multiOptionsLabelStyle}
                            optionsLabelStyle={style.labelStyle}
                            listEmptyLabelStyle={style.inputFilterStyle}
                            multiListEmptyLabelStyle={style.inputFilterStyle}
                            selectedItemStyle={style.inputFilterStyle}
                            arrowIconColor={'#9D61FE'}
                            searchIconColor={'#9D61FE'}
                            toggleIconColor={'#9D61FE'}
                        />
                    </View>
                    <View style={{maxHeight: '50%', flex: 1, marginBottom: 20, paddingRight:20, paddingLeft: 20,}}>
                        <ScrollView>
                        {props.data.map((item) => (
                            <View style={style.row} key={item.meal_category}>
                                <Text style={{
                                fontSize: 25,
                                fontFamily: FONT.ubuntu_r,
                                }}>
                                    {item.meal_category}
                                </Text>
                                <TouchableOpacity onPress={() => handleRefresh(item.meal_category)}>
                                    <IconM name={'refresh'} size={50} color="black" />
                                </TouchableOpacity>
                            </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginBottom: 20}}>
                        <Text style={{
                            fontSize: 25,
                            fontFamily: FONT.ubuntu_r,
                            alignSelf: 'center',
                            }}>
                            Refresh all the meals?
                        </Text>
                        <TouchableOpacity style={{
                            alignSelf: 'center',
                            marginTop: 10,
                        }}>
                            <IconF name={'spinner-refresh'} size={50} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
      }
};
const style = StyleSheet.create({
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
    },
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    box: {
        width: '80%',
        height: '80%',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
    containerStyle: {
        backgroundColor: 'white',
    },
    select: {
        maxWidth: '80%',
    },
    labelStyle: {
        fontSize: 20,
        color: 'black',
        fontFamily: FONT.ubuntu_r,
    },
    multiOptionContainerStyle:{
        backgroundColor: '#9D61FE',
    },
    multiOptionsLabelStyle: {
        fontFamily: FONT.ubuntu_r,
        fontSize: 15,
    },
    inputFilterStyle: {
        fontSize: 17,
        fontFamily: FONT.ubuntu_r,
    }
  });

export default ModalSettings;