import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import homeActive from "../../icons/homeActive.png";
import search from "../../icons/search.png";
import reels from "../../icons/reels.png";
import add from "../../icons/add.png";
import dp from "../../images/friends/dp.jpg";
import tw from "twrnc";
import { Platform } from 'react-native';

export default function BottomNavbar({navigation}) {

  return (
    <View style={{position:Platform.OS==="web"?"fixed":"absolute",width:"100%",bottom:0,zIndex:50}}>
      <View style={tw`px-[15px] py-[12px] flex-row justify-between bg-white w-full`}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Image style={tw`w-[24px] h-[24px]`} source={homeActive} />
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
          <Image style={tw`w-[24px] h-[24px]`} source={search}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Add")}>
          <Image style={tw`w-[24px] h-[24px]`} source={add} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Reels")}>
          <Image style={tw`w-[24px] h-[24px]`} source={reels} />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <View style={tw`items-center`}>
            <Image style={tw`w-[24px] h-[24px] rounded-full mb-[4px]`} source={dp} />
            <View style={tw`w-[4px] h-[4px] bg-[#FE0135] rounded-full`}/>
          </View>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}
