import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
const SlideButton = ({ }) => {
    const X = useSharedValue(10);
    const animatedGestureHandler = useAnimatedGestureHandler({
        onActive: e => {
            if(e.translationX < 10 || e.translationX > 185) {
                // X.value = -e.translationX;
            } else {
                X.value = e.translationX;
            }
        },
        onEnd: () => {
            if(X.value < 120) {
                X.value = withSpring(10);
            } else {
                X.value = withSpring(185);
            }
        },
    });
    const animatedStyle = useAnimatedStyle(() => {
        return {transform:[{translateX: X.value}]}
    })
    return (
        <View style={{
            width: 240,
            height: 60,
            backgroundColor: '#ffffff',
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 90,
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 3,
        }}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
                <Animated.View style={[{
                    width: 45,
                    height: 45,
                    borderRadius: 90,
                    backgroundColor: 'white',
                    // position: 'absolute',
                    // left: 10,
                }, animatedStyle]}>
                </Animated.View>
            </PanGestureHandler>

        </View>
    );
};
export default SlideButton;
