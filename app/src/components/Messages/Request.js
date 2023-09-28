import React from "react";
import { View, Text, Image } from "react-native";
import messages from "../../icons/messages.png";
import tw from "twrnc";

export default function Request() {
  return (
    <View style={tw`items-center mt-[80px]`}>
      <View style={tw`flex items-center px-[50px]`}>
        <Image
          style={tw`w-[50px] h-[50px] rounded-full mb-[15px]`}
          source={messages}
        />
        <Text style={tw`text-[16px] font-bold mb-[15px]`}>
          No request messages
        </Text>
      </View>
    </View>
  );
}
