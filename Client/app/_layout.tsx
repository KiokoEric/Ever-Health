import * as Font from 'expo-font';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';

const _layout = () => {

  const [fontsLoaded, setFontsLoaded] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "InstrumentSerif": require('../assets/fonts/InstrumentSerif-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

return (
  <Stack>
    <Stack.Screen name='(tabs)'  options={{ title: 'Home',
      headerShown: false
    }} />
    <Stack.Screen name='Login' options={{ title: 'Login',
      headerShown: false
    }} />
    <Stack.Screen name='Registration' options={{ title: 'Registration',
      headerShown: false
    }} />
  </Stack>
)
}

export default _layout
