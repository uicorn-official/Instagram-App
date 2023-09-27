import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import storyring from "../../images/global/Storyring.png";
import greycircle from "../../images/global/GreyCircle.png";
import msdhoni from "../../images/friends/msdhoni.jpg";
import katrinakaif from "../../images/friends/katrina-kaif.jpg";
import viratKohli from "../../images/friends/virat-kohli.jpg";
import dots from "../../icons/3dots.png";
import save from "../../icons/save.png";
import saved from "../../icons/saved.png";
import liked from "../../icons/liked.png";
import comment from "../../icons/comment.png";
import share from "../../icons/share.png";
import bluetick from "../../icons/bluetick.png";
import tag from "../../icons/tag.png";
import like from "../../icons/like.png";
import tw from "twrnc";
import Comment from "./Comment";
import { Platform } from "react-native";
// import Video from "react-native-video";

export default function Post({ item, islastPost }) {
  const {
    dp,
    name,
    isVerified,
    isStoryActive,
    isSponsored,
    isTagged,
    isReel,
    reel,
    post,
    caption,
    likesCount,
    commentCount,
    sampleComments,
  } = item;

  const [isLiked, setLike] = useState(false);
  const [isSaved, setsaved] = useState(false);

  return (
    <View
      style={tw`${
        islastPost ? (Platform.OS === "web" ? "mb-[60px]" : "mb-[250px]") : ""
      }`}
    >
      {/* Post Header */}
      <View
        style={tw`flex-row justify-between items-center px-[10px] py-[7px] `}
      >
        <View style={tw`flex-row`}>
          <View style={tw`mr-[10px] w-[36px]`}>
            <Image
              style={tw`w-[40px] h-[40px]`}
              source={isStoryActive ? storyring : greycircle}
            />
            <Image
              style={tw`w-[34px] h-[34px] rounded-full absolute top-[3px] left-[3px]`}
              source={dp}
            />
          </View>
          <View style={tw`justify-center`}>
            <View style={tw`flex-row mb-[2px]`}>
              <Text style={tw`font-bold text-[12px] mr-[4px]`}>{name}</Text>
              {isVerified && (
                <Image style={tw`w-[13px] h-[13px] `} source={bluetick} />
              )}
            </View>
            {isSponsored && <Text style={tw`text-[10px]`}>Sponsored</Text>}
          </View>
        </View>
        <Image style={tw`w-[24px] h-[24px]`} source={dots} />
      </View>

      {/* Post Picture */}
      <View>
        <Image source={post[0]} style={tw`h-[450px] w-full`} />
        {isTagged && (
          <Image
            style={tw`w-[24px] h-[24px] rounded-full absolute bottom-[10px] left-[16px]`}
            source={tag}
          />
          // <Video
          //   source={{ uri: "https://www.instagram.com/reel/CtKIWmkhaFf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" }} // Can be a URL or a local file.
          //   style={{width:"100%",height:200}}
          // />
        )}
      </View>

      {/* Post Footer */}
      <View
        style={tw`flex-row justify-between items-center px-[12px] py-[10px] `}
      >
        <View style={tw`flex-row`}>
          <TouchableOpacity
            onPress={() => {
              setLike(!isLiked);
            }}
          >
            <Image
              style={tw`w-[24px] h-[24px] mr-[20px]`}
              source={isLiked ? liked : like}
            />
          </TouchableOpacity>

          <Image style={tw`w-[24px] h-[24px] mr-[20px]`} source={comment} />
          <Image style={tw`w-[24px] h-[24px]`} source={share} />
        </View>
        <TouchableOpacity
          onPress={() => {
            setsaved(!isSaved);
          }}
        >
          <Image
            style={tw`w-[24px] h-[24px]`}
            source={isSaved ? saved : save}
          />
        </TouchableOpacity>
      </View>

      {/* Post Footer 2 */}
      <View style={tw`px-[12px] `}>
        <View style={tw`flex items-center flex-row pb-[5px]`}>
          <Image
            style={tw`w-[24px] h-[24px] rounded-full border-2 border-white z-30`}
            source={msdhoni}
          />
          <Image
            style={tw`w-[24px] h-[24px] rounded-full border-2 border-white absolute top-0 left-[16px] z-20`}
            source={katrinakaif}
          />
          <Image
            style={tw`w-[24px] h-[24px] rounded-full border-2 border-white absolute top-0 left-[32px] z-10`}
            source={viratKohli}
          />
          <View style={tw`flex-row absolute left-[70px]`}>
            <Text style={tw`text-[12px]`}>Liked by </Text>
            <Text style={tw`text-[12px] font-bold`}>alokkumax </Text>
            <Text style={tw`text-[12px]`}>and </Text>
            <Text style={tw`text-[12px] font-bold`}>
              {isLiked
                ? (Number(likesCount.replaceAll(",", "")) + 1).toLocaleString(
                    "en-IN"
                  )
                : likesCount}{" "}
            </Text>
            <Text style={tw`text-[12px]`}> others </Text>
          </View>
        </View>
        <View style={tw``}>
          <Text style={tw`text-[12px] font-bold mb-[4px]`}>
            {name}
            {"   "}
            <Text style={tw`font-normal`}>
              {caption.length >= 100 ? caption.slice(0, 100) : caption}
            </Text>
            <Text style={tw`text-[12px] text-[#6E6E6E]`}>
              {caption.length >= 100 ? "... more" : ""}
            </Text>
          </Text>

          <Text style={tw`text-[12px] text-[#6E6E6E] mb-[3px]`}>
            View all {commentCount} comments
          </Text>
          <FlatList
            data={sampleComments}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Comment item={item} key={index} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
