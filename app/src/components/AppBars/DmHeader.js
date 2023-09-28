import React from "react";
import { View, Text,TouchableOpacity ,Image } from "react-native";
import IconAD from "react-native-vector-icons/AntDesign";
import IconF from "react-native-vector-icons/Feather";
import storyring from "../../images/global/Storyring.png";
import bluetick from "../../icons/bluetick.png";
import tw from "twrnc";

export default function DmHeader({ navigation, item }) {
  const { name, username, image, isVerified, isStoryActive } = item;
  return (
    <View
      style={tw`flex-row items-center justify-between pt-[20px] pb-[15px] px-[13px]`}
    >
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconAD name="arrowleft" size={30} style={tw`mr-[20px]`} />
        </TouchableOpacity>
        <View style={tw`flex-row`}>
          <View style={tw`mr-[15px] w-[42px] flex`}>
            {isStoryActive && (
              <Image style={tw`w-[42px] h-[42px]`} source={storyring} />
            )}

            <Image
              style={tw`w-[36px] h-[36px] rounded-full ${
                isStoryActive ? "absolute top-[3px] left-[3px]" : ""
              } `}
              source={image}
            />
          </View>
          <View style={tw`justify-center`}>
            <View style={tw`flex-row mb-[2px] items-center`}>
              <Text
                style={tw`text-black font-bold text-[15px] mr-[4px]`}
              >
                {name}
              </Text>
              {item.isVerified && (
                <Image style={tw`w-[13px] h-[13px] `} source={bluetick} />
              )}
            </View>
              <Text style={tw`text-[12px] text-[#6E6E6E]`}>
                {username}
              </Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-row items-center`}>
        <IconF name="phone-call" size={22} style={tw`mr-[20px]`} />
        <IconF name="video" size={25} style={tw`mr-[20px]`} />
        <IconF name="flag" size={22} style={tw``} />
      </View>
      
    </View>
  );
}
