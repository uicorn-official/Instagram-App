import React from 'react'
import { View, Text } from 'react-native'
import tw from "twrnc";

export default function Span(props) {
    return (
        <View>
            <Text style={tw`${props.style}`}>{" "}{props.children}{" "}</Text>
        </View>
    )
}
