import React, { useEffect } from "react";
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {

    return (
        <SettingsStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerMode: "screen"
            }}
        >
            <SettingsStack.Screen
                options={{ headerShown: false }}
                name="Settings"
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name="Favourites"
                component={FavouritesScreen}
            />
            <SettingsStack.Screen
                name="Camera"
                component={CameraScreen}
            />
        </SettingsStack.Navigator>
    )
}