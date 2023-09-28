import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'
import IconAD from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import tw from "twrnc";

export default function AppbarMessages({navigation}) {
    return (
        <View style={tw`flex-row items-center justify-between pt-[20px] pb-[15px] px-[13px]`}>
            <View style={tw`flex-row items-center`}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                     <IconAD name="arrowleft" size={30} style={tw`mr-[30px]`}/>
                </TouchableOpacity>
                <Text style={tw`font-bold mr-[10px] text-[18px]`}>abhilasha_4sq</Text>
                <IconAD name="down" size={14} style={tw`mr-[10px]`}/>
            </View>
            <IconF name="edit" size={25} style={tw`mr-[10px]`}/>
        </View>
    )
}
