import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList, Animated, StyleSheet } from "react-native";
import FONT from "../../constants/theme";
import Icon from 'react-native-vector-icons/Entypo';


const renderIngredient = ({ item }) => (
    <View style={styles.ingredientContainer}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.ingredient}>{item}</Text>
    </View>
);

const ExpandList = ({ data }) => {
    const [iconName, setIconName] = useState('chevron-down');
    const [isExpanded, setIsExpanded] = useState(false);
    const [flatListHeight, setFlatListHeight] = useState(0);

    const handleFlatListLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        console.log(height);
        setFlatListHeight(height+90);
    };
    const ExpandableView = () => {
        const [height, setHeight] = useState(new Animated.Value(0));

        useEffect(() => {
            Animated.timing(height, {
                toValue: isExpanded ? flatListHeight : 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }, [isExpanded, height, data.meal_ingredients]);

        return (
            <Animated.View
                style={{
                    height: height,
                    backgroundColor: "white",
                    marginTop: -70,
                    borderRadius: 20,
                    overflow: 'hidden',
                    maxWidth: 300,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 70,
                    flexGrow: 0,
                }}
            >
                <FlatList
                    data={data.meal_ingredients}
                    renderItem={renderIngredient}
                    // keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </Animated.View>
        );
    };

    return (
            <View>
                <Text style={{ fontSize: 25, fontFamily: FONT.regular, color: "white", textAlign: "left", maxWidth: 300 }}>{data.meal_category}</Text>
                <TouchableOpacity
                    onPress={() => {
                        setIsExpanded(!isExpanded);
                        setIconName((prevName) => (prevName === 'chevron-up' ? 'chevron-down' : 'chevron-up'));
                    }}
                    style={styles.toggle}
                >
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.toggleText}>{data.meal_name}</Text>
                    <Icon name={iconName} size={30} color="black" />
                </TouchableOpacity>
                <ExpandableView />
                <FlatList
                    data={data.meal_ingredients}
                    renderItem={renderIngredient}
                    onLayout={handleFlatListLayout}
                    // keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.container}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    style={{ 
                    opacity: 0,
                    position: 'absolute',}}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
    },
    toggle: {
        flexDirection: "row",
        width: 300,
        height: 70,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
        paddingLeft: 20,
        paddingRight: 20,
    },
    toggleText: {
        color: "black",
        fontSize: 30,
        fontFamily: FONT.ubuntu_r,
        flexGrow: 2,
        maxWidth: 220,
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    ingredientContainer: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
    },
    dot: {
        fontSize: 16,
        marginRight: 8,
    },
    ingredient: {
        fontSize: 16,
        maxWidth: 80,
    },
});

export default ExpandList;
