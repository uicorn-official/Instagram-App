import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "./Post";
import posts from "../../constants/posts";

export default function AllPosts() {
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Post item={item} key={item.id} islastPost={index===posts.length-1?true:false}/>}
      />
    </View>
  );
}
