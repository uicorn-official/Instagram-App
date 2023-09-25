import React, { useState } from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native'
import like from "../../icons/like.png";
import liked from "../../icons/liked.png";
import tw from "twrnc";

export default function Comment({item}) {
    const {name,comment,}=item;
    const [isCommentLiked, setCommentLike] = useState(false);
    const [commentLikeIndex, setCommentLikeIndex] = useState(-1);
    return (
        <View>
            <View style={tw`flex-row justify-between mb-[3px]`}>
                <View style={tw`flex-row`}>
                  <Text style={tw`text-[12px] font-bold mr-[3px]`}>
                    {name}
                  </Text>
                  <Text style={tw`text-[12px]`}>{comment}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={()=>{
                    setCommentLike(!isCommentLiked)
                    }}>
                    <Image
                      style={tw`w-[10px] h-[10px]`}
                      source={isCommentLiked ? liked : like}
                    />
                  </TouchableOpacity>
                </View>
              </View>
        </View>
    )
}
