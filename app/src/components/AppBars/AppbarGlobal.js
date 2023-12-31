import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import igLogo from "../../images/global/IG-logo.png";
import arrowDown from "../../icons/arrow-down.png";
import like from "../../icons/like.png";
import messages from "../../icons/messages.png";
import add from "../../icons/add.png";
import tw from "twrnc";

export default function AppbarGlobal({navigation}) {
  return (
    <View style={tw`flex-row justify-between pt-[20px] pb-[15px] px-[13px]`}>
      <View style={tw`flex-row`}>
        <Image style={tw`w-[104px] h-[30px] mr-[8px] `} source={igLogo} />
        <Image style={tw`w-[16px] h-[16px]`} source={arrowDown} />
      </View>
      <View style={tw`flex-row`}>
        <Image style={tw`w-[24px] h-[24px] mr-[24px]`} source={like} />
        <TouchableOpacity onPress={()=>navigation.navigate("Messages")}>
          <Image style={tw`w-[24px] h-[24px]`} source={messages} />
        </TouchableOpacity>
        
        {/* <Image style={tw`w-[24px] h-[24px]`} source={add} /> */}
      </View>
    </View>
  );
}
