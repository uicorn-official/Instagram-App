import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import AppbarMessages from "../AppBars/AppbarMessages";
import IconAD from "react-native-vector-icons/Feather";
import tw from "twrnc";
import MessagesHeader from "./MessagesHeader";
import AllMessages from "./AllMessages";
import General from "./General";
import Request from "./Request";

export default function Messages({ navigation }) {
  const [tab, setTab] = useState(1);

  const handleTabs = (e) => {
    setTab(e);
  };

  return (
    <View style={tw`w-full flex-1 bg-white`}>
      <AppbarMessages navigation={navigation} />
        <MessagesHeader tab={tab} handleTabOptions={handleTabs} />
        {tab === 1 && <AllMessages navigation={navigation} />}
        {tab === 2 && <General />}
        {tab === 3 && <Request />}
    </View>
  );
}
