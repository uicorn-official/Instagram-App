import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import AppbarGlobal from "./app/src/components/AppBars/AppbarGlobal";
import Stories from "./app/src/components/Stories/Stories";
import Post from "./app/src/components/Posts/Post";
import AllPosts from "./app/src/components/Posts/AllPosts";
import BottomNavbar from "./app/src/components/Layout/BottomNavbar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/src/components/Home/Home";
import Messages from "./app/src/components/Messages/Messages";
import DM from "./app/src/components/DMs/DM";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}
        />
        <Stack.Screen name="Search" component={Stories} />
        <Stack.Screen name="Add" component={Stories} />
        <Stack.Screen name="Reels" component={Stories} />
        <Stack.Screen name="Profile" component={Stories} />

        <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }}/>
        <Stack.Screen name="DMs" component={DM} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
