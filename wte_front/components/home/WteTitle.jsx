import { useState } from "react";
import styles from "./wtetitle.style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const WteTitle = ({ searchTerm, setSearchTerm, handleClick }) => {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState("Full-time");
  
    return (
        <View>
            <Text style={styles.appName}>WTE - What to eat</Text>
        </View>
        );
    };
    
export default WteTitle;