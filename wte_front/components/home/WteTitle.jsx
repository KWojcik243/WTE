import { useState } from "react";
import styles from "./wtetitle.style";
import front_logo from "../../assets/images/front_logo.png";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import SlideButton from "../SlideButton";

const WteTitle = () => {
    const router = useRouter();
  
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.appName}>WTE </Text>
                <Text style={styles.appName}>What to eat</Text>
            </View>
            
            <Image
                style={styles.roundedImage}
                source={front_logo}
            />
            <SlideButton />
        </View>
        );
    };
    
export default WteTitle;