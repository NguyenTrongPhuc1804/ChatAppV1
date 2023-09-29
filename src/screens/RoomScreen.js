import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RoomScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate("ChatScreen");
        }}
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <View
          style={{
            borderRadius: 20,
            height: 150,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: 50,
              width: 70,
              height: 70,
            }}
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1682147474777-90dc55cdbc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>React native</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <View
          style={{
            borderRadius: 20,
            height: 150,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              borderRadius: 50,
              width: 70,
              height: 70,
            }}
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1682147474777-90dc55cdbc67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>React native</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RoomScreen;
