import React from 'react'
import { View, Text } from 'react-native'
import DmHeader from '../AppBars/DmHeader';
import AllDms from './AllDms';
import tw from "twrnc";

export default function DM({route,navigation}) {
    const {item} = route.params;

    return (
        <View style={tw`bg-white flex-1`}>
            <DmHeader navigation={navigation} item={item}/>
            <AllDms item={item}/>
        </View>
    )
}
