import React from "react";
import { View, Image } from "react-native";
import homeActive from "../../icons/homeActive.png";
import search from "../../icons/save.png";
import reels from "../../icons/reels.png";
import add from "../../icons/add.png";
import dp from "../../images/friends/dp.jpg";
import tw from "twrnc";

export default function BottomNavbar() {
  return (
    <View style={{position:"fixed",width:"100%",bottom:0,zIndex:50}}>
      <View style={tw`px-[15px] py-[12px] flex-row justify-between bg-white w-full`}>
        <Image style={tw`w-[24px] h-[24px]`} source={homeActive} />
        <Image style={tw`w-[24px] h-[24px]`} source={search} />
        <Image style={tw`w-[24px] h-[24px]`} source={add} />
        <Image style={tw`w-[24px] h-[24px]`} source={reels} />
        <View style={tw`items-center`}>
          <Image style={tw`w-[24px] h-[24px] rounded-full mb-[4px]`} source={dp} />
          <View style={tw`w-[4px] h-[4px] bg-[#FE0135] rounded-full`}/>
        </View>
      </View>
    </View>
  );
}
