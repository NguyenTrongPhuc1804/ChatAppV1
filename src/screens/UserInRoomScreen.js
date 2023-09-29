import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const UserInRoomScreen = () => {
  return (
    <View>
      <View style={{ padding: 10 }}>
        <View
          style={{
            borderRadius: 15,
            padding: 15,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,

            elevation: 7,
          }}
        >
          <Image
            style={{ width: 80, height: 80, borderRadius: 50 }}
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1682147474777-90dc55cdbc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>asdasd</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="online-prediction" size={24} color="green" />
              <Text style={{ marginLeft: 10, fontSize: 16 }}>asdasd</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserInRoomScreen;
