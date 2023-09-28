import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import IconF from "react-native-vector-icons/Feather";
import tw from "twrnc";

export default function MessagesHeader({tab,handleTabOptions}) {
  return (
    <View>
      <View style={tw`px-[13px] py-[5px] flex-row items-center justify-between`}>
        <View style={tw`bg-[#e6e6e6] px-[16px] py-[8px] w-[85%] rounded-[10px] flex-row items-center`}>
          <IconF name="search" size={18} style={tw`mr-[13px] text-[#6E6E6E]`} />
          <Text style={tw`text-[14px] text-[#6E6E6E]`}>Search</Text>
        </View>
        <Text style={tw`text-[#0092fc] font-bold text-[12px]`}> Filter</Text>
      </View>

      {/* Tabs Header  */}
      <View style={tw`mt-[15px] px-[13px] py-[5px] flex-row items-center justify-between`}>

          <TouchableOpacity style={tw`w-[32%]`} onPress={()=>handleTabOptions(1)}>
            <View style={tw`${tab===1?"bg-[#3ba7f433]":"bg-[#e6e6e6]"} h-[36px] items-center justify-center  rounded-[10px]`}>
                <Text style={tw`${tab===1?"text-[#0092fc]":"text-[#282525]"} text-[11px] font-bold`}>Primary</Text>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity style={tw`w-[32%]`} onPress={()=>handleTabOptions(2)}>
            <View style={tw`${tab===2?"bg-[#3ba7f433]":"bg-[#e6e6e6]"} h-[36px] items-center justify-center rounded-[10px]`}>
            <Text style={tw`${tab===2?"text-[#0092fc]":"text-[#282525]"} text-[11px] font-bold`}>General</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={tw`w-[32%]`} onPress={()=>handleTabOptions(3)}>
            <View style={tw`${tab===3?"bg-[#3ba7f433]":"bg-[#e6e6e6]"} h-[36px] items-center justify-center rounded-[10px]`}>
            <Text style={tw`${tab===3?"text-[#0092fc]":"text-[#282525]"} text-[11px] font-bold`}>Requests</Text>
            </View>
          </TouchableOpacity>

      </View>
    </View>
  );
}
