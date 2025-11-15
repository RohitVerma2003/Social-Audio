import { store } from "@/redux/store";
import { Inter_300Light, Inter_500Medium, Inter_700Bold, Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_300Light,
    Inter_500Medium,
    Inter_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Provider store={store}><Stack screenOptions={{ headerShown: false }} /></Provider>;
}
