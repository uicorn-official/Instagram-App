import React from 'react'
import { View, Text,Image } from 'react-native'
import storyring from "../../images/global/Storyring.png";
import greycircle from "../../images/global/GreyCircle.png";
import tw from "twrnc";

export default function OthersStory({style,item,isStoryActive}) {
    const {image,name}=item
    return (
        <View style={tw`${style} items-center`}>
             <Image style={tw`w-[72px] h-[72px]`} source={isStoryActive?storyring:greycircle} />
             <Image style={tw`w-[60px] h-[60px] rounded-full absolute top-[6px] left-[6px]`} source={image} />
             <Text style={tw`text-[11px] leading-[22px]`}>{name}</Text>
        </View>
    )
}
