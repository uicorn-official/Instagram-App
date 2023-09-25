import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Appbar from './app/src/components/Appbar';
import tw from 'twrnc';
import AppbarGlobal from './app/src/components/AppBars/AppbarGlobal';
import Stories from './app/src/components/Stories/Stories';
import Post from './app/src/components/Posts/Post';
import AllPosts from './app/src/components/Posts/AllPosts';
import BottomNavbar from './app/src/components/Layout/BottomNavbar';

export default function App() {
  return (
    <SafeAreaView style={tw`w-[100%] h-full`}>
      <AppbarGlobal/>
      <Stories/>
      <AllPosts/>
      <BottomNavbar/>
    </SafeAreaView>
  );
}
