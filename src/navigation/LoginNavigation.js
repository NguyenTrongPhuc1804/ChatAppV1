import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { COLOR } from "../constans/color";
const Stack = createStackNavigator();
const LoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({ headerShown: false })}
      initialRouteName="Register"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login1",
          headerStyle: {
            backgroundColor: COLOR.primary,
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Register2" }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
