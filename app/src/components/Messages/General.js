import React from "react";
import { View, Text,Image } from "react-native";
import messages from "../../icons/messages.png";
import tw from "twrnc";

export default function General() {
  return (
    <View style={tw`items-center mt-[80px]`}>
      <View style={tw`flex items-center px-[50px]`}>
        <Image style={tw`w-[50px] h-[50px] rounded-full mb-[15px]`} source={messages} />
        <Text style={tw`text-[20px] font-bold mb-[15px]`}>Your general messages</Text>
        <Text style={tw`text-[#6e6e6e] text-[11px] text-center leading-[18px]`}>Notifications are off for messages you move here, but you can turn them on anytime.</Text>
        <Text style={tw`text-[#0092fc] text-[12px]`}>Go to notifications settings.</Text>
      </View>
    </View>
  );
}
