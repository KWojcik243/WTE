import { SplashScreen, Stack } from 'expo-router'
import { useFonts, KaushanScript_400Regular } from '@expo-google-fonts/kaushan-script';
import { useCallback } from 'react';

// SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        KaushanScript_400Regular,
    });

    if(!fontsLoaded) return null;


    return <Stack/>;
}

export default Layout;