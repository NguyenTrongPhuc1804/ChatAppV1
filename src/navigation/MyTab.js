import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginNavigation from "./LoginNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeNavigation from "./HomeNavigation";
import { COLOR } from "../constans/color";
import InfoNavigation from "./InfoNavigation";
import RoomNavigation from "./RoomNavigation";

const Tab = createBottomTabNavigator();
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Room"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home": {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
              break;
            }
            case "Room": {
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
            }
            case "Info": {
              iconName = focused ? "ios-list" : "ios-list-outline";
              break;
            }
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          backgroundColor: COLOR.primary,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          color: "white",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Room" component={RoomNavigation} />
      <Tab.Screen name="Info" component={InfoNavigation} />
    </Tab.Navigator>
  );
};

export default MyTab;
