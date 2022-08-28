import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import Home from "./Components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
      {/*
        <StatusBar style="auto" />
       */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
