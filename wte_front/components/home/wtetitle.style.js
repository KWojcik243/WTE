import { StyleSheet } from "react-native";
import FONT from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
        justifyContent: "space-around",
        marginTop: "25%", 
    },
    appName: {
        fontSize: 60,
        fontFamily: FONT.regular,
        color: "#FFFFFF",
        textAlign: "center",
    },
    roundedImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },

});

export default styles;