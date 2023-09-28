import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import chats from "../../constants/chats";
import tw from "twrnc";

export default function AllDms({ item }) {
  const { image } = item;
  return (
    <View style={tw`px-[13px] flex-1`}>
      <FlatList
        data={chats}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <>
            <View style={tw`${item.msgType==="sent"?"justify-end":""} ${index===0?"mt-20px":""} flex-row items-end flex-1 mb-[20px]`}>
             {item.msgType==="received" && <Image
                style={tw`w-[30px] h-[30px] rounded-full mr-[10px]`}
                source={image}
              />}
              <View>
                {item.msgs.map((i, index) => (
                  <Text
                    style={tw`${
                      index === 0
                        ? "rounded-[10px] rounded-bl-[2px]"
                        : index === item.msgs.length - 1
                        ? "rounded-[10px] rounded-tl-[2px]"
                        : "rounded-[10px] rounded-bl-[2px] rounded-tl-[2px]"
                    } ${item.msgType==="sent"?"bg-[#3797f0] text-white":"bg-[#e6e6e6] text-black"} max-w-[200px] mb-[2px] p-[10px]`}
                    key={index}
                  >
                    {i}
                  </Text>
                ))}
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}
