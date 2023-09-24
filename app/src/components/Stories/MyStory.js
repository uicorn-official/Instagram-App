import React from 'react'
import { View, Text,Image } from 'react-native'
import dp from "../../images/friends/dp.jpg";
import add from "../../icons/addBlueIcon.png";
import tw from "twrnc";

export default function MyStory({style}) {
    return (
        <View style={tw`${style} pl-[8px]`}>
             <Image style={tw`w-[60px] h-[60px] rounded-full`} source={dp} />
             <Image style={tw`w-[20px] h-[20px] absolute top-[40px] left-[40px]`} source={add} />
             <Text style={tw`text-[11px] leading-[22px]`}>Your story</Text>
        </View>
    )
}
