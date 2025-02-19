import { Stack } from "expo-router";
import '../global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Text, TextInput } from "react-native";
import setDefaultProps from 'react-native-simple-default-props'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'ClashGrotesk': require('../assets/fonts/ClashGrotesk-Variable.ttf'),
    'OverusedGrotesk': require('../assets/fonts/OverusedGrotesk-Medium.otf'),
    'OGBold': require('../assets/fonts/OverusedGrotesk-Bold.otf'),
    'OGSBold': require('../assets/fonts/OverusedGrotesk-SemiBold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const defaultTextStyle = {
    fontFamily: 'OverusedGrotesk',
  };
  
  const originalTRender = Text.render;
  Text.render = function render(props) {
    props = {
      ...props,
      style: [
        defaultTextStyle,
        props.style,
      ],
    };
  
    return originalTRender.apply(this, [props]);
  };
  const originalTIRender = TextInput.render;
  TextInput.render = function render(props) {
    props = {
      ...props,
      style: [
        defaultTextStyle,
        props.style,
      ],
    };
  
    return originalTIRender.apply(this, [props]);
  };

  return (
    <SafeAreaView className="h-screen-safe">
      <StatusBar barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
