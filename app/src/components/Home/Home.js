import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import AppbarGlobal from "../AppBars/AppbarGlobal"
import Stories from "..//Stories/Stories";
import AllPosts from "..//Posts/AllPosts";
import BottomNavbar from "..//Layout/BottomNavbar";

export default function Home({navigation}) {
  return (
    <SafeAreaView style={tw`w-[100%] flex-1`}>
      <AppbarGlobal navigation={navigation}/>
      <Stories />
      <AllPosts />
      <BottomNavbar navigation={navigation}/>
    </SafeAreaView>
  );
}
