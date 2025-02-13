import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import store from './depo/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="testcoz" options={{ title: 'Test Çöz' }} />
          <Stack.Screen name="urundetay" options={{ title: 'Ürün Detay' }} />
          <Stack.Screen name="urundetaykitap" options={{ title: 'Detay Kitap' }} />
          <Stack.Screen name="sepet" options={{ title: 'Sepet' }} />
          <Stack.Screen name="testsayfasi" options={{ title: 'Test Sayfası' }} />
          <Stack.Screen name="testbitir" options={{ title: 'Test Bitir' }} />
          <Stack.Screen name="signup" options={{ title: 'Kayıt Ol' }} />
          <Stack.Screen name="login" options={{ title: 'Giriş Yap' }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
