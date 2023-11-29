import React, { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    FlatList, 
    Animated,
    StyleSheet, 
} from "react-native"; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from "./wtetitle.style";
const ExpandList = () => {
    const ExpandableView = ({ expanded = false }) => {
        const [height] = useState(new Animated.Value(0));
      
        useEffect(() => {
          Animated.timing(height, {
            toValue: !expanded ? 200 : -20,
            duration: 150,
            useNativeDriver: false
          }).start();
        }, [expanded, height]);
      
        // console.log('rerendered');
      
        return (
          <Animated.View
            style={{ height: height,
                backgroundColor: "white",
                marginTop: -70,
                borderRadius: 20,
            }}
          ></Animated.View>
        );
      };

    const [isExpanded, setIsExpanded] = useState(true);

    return (
      <View style={styles.app}>
        <View style={{
            marginTop: 75,
            marginBottom: 40,
        }}>
                <Text style={style.appName}>WTE </Text>
                <Text style={style.appName}>What to eat</Text>
        </View>
        <View >
            <TouchableOpacity
            onPress={() => {
                setIsExpanded(!isExpanded);
            }}
            style={styles.toggle}
            >
                <Text style={styles.toggleText}>Expand</Text>
                
            </TouchableOpacity>
            {/* <Icon name="home" size={30} color="red" /> */}
            <ExpandableView expanded={isExpanded} />
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
    app: {
        flex: 1,
        alignItems: "center",
    },
    toggle: {
      width: 300,
      height: 70,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      zIndex: 1,
      shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 3,
    },
    toggleText: {
      color: "black",
    }
  });
  

export default ExpandList