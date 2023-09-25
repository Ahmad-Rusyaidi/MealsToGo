import React from "react";
import { Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";


const Tab = createBottomTabNavigator();

const Settings = () => 
  <SafeAreaView style={styles.container}>
    <Text>Settings</Text>
  </SafeAreaView>
;

const Maps = () => 
  <SafeAreaView style={styles.container}>
    <Text>Maps</Text>
  </SafeAreaView>
;

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Restaurants') {
                iconName = "md-restaurant";
              } else if (route.name === 'Maps') {
                iconName = "md-map";
              } else if (route.name === 'Settings') {
                iconName = "md-settings";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen options={{ headerShown: false }} name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen options={{ headerShown: false }} name="Maps" component={Maps} />
            <Tab.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
