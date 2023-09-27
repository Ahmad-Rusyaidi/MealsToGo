import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeAreaView style={styles.container}>
    <Text>Settings</Text>
  </SafeAreaView>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Restaurant") {
            iconName = "md-restaurant";
          } else if (route.name === "Maps") {
            iconName = "md-map";
          } else if (route.name === "Settings") {
            iconName = "md-settings";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Restaurant"
        component={RestaurantNavigator}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Maps"
        component={MapScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
