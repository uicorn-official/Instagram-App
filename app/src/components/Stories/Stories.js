import React from "react";
import { View, Text, ScrollView } from "react-native";
import MyStory from "./MyStory";
import storiesData from "../../constants/stories";
import tw from "twrnc";
import OthersStory from "./OthersStory";

export default function Stories() {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`grow-0`}
      >
        <View
          style={tw`flex-row h-[100px] items-center border-b-2 border-[#DDDDDD]`}
        >
          <MyStory style="mr-[12px]" />
          {storiesData.map((item, index) => (
            <OthersStory
              style="mr-[12px]"
              item={item}
              key={index}
              isStoryActive={index <= 10 ? true : false}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
