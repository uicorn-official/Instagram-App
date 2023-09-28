import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import tw from "twrnc";
import messages from "../../constants/messages";
import storyring from "../../images/global/Storyring.png";
import IconF from "react-native-vector-icons/Feather";
import bluetick from "../../icons/bluetick.png";

export default function AllMessages() {
  return (
    <View style={tw`p-[13px] flex-1`}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <>
            <View style={tw`flex-row items-center justify-between mb-[20px]`}>
              <View style={tw`flex-row items-center justify-between w-full`}>
                <View style={tw`flex-row`}>
                  <View style={tw`mr-[15px] w-[60px] flex items-center`}>
                    {item.isStoryActive && (
                      <Image style={tw`w-[60px] h-[60px]`} source={storyring} />
                    )}

                    <Image
                      style={tw`w-[52px] h-[52px] rounded-full ${
                        item.isStoryActive
                          ? "absolute top-[4px] left-[4px]"
                          : ""
                      } `}
                      source={item.image}
                    />
                  </View>
                  <View style={tw`justify-center`}>
                    <View style={tw`flex-row mb-[2px]`}>
                      <Text style={tw`${item.msgsCount?"text-black":"text-[#6E6E6E]"} font-bold text-[12px] mr-[4px]`}>
                        {item.name}
                      </Text>
                      {item.isVerified && (
                        <Image
                          style={tw`w-[13px] h-[13px] `}
                          source={bluetick}
                        />
                      )}
                    </View>
                    {item.msgsCount > 0 && (
                      <View style={tw`flex-row`}>
                        <Text style={tw`font-bold text-[12px] mr-[4px]`}>
                          {item.msgsCount}
                          {" new messages"}
                        </Text>
                        <Text style={tw`text-[12px] mr-[4px]`}>.</Text>
                        <Text style={tw`text-[12px]`}>{item.sentWhen}</Text>
                      </View>
                    )}
                    {item.msgsCount === 0 && (
                      <Text style={tw`text-[12px] text-[#6E6E6E]`}>
                        {"Seen "}
                        {item.seenWhen}
                      </Text>
                    )}
                  </View>
                </View>

                <IconF
                  name="camera"
                  size={24}
                  style={tw`${item.msgsCount?"text-black":"text-[#6E6E6E]"}`}
                />
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
}
