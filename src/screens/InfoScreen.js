import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLOR } from "../constans/color";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputCus from "../components/InputCus";
const { width, height } = Dimensions.get("window");

const InfoScreen = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            borderBottomRightRadius: 100,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,

            elevation: 23,
            marginBottom: 20,
          }}
        >
          <View>
            <Image
              style={{
                width: 130,
                height: 130,
                marginBottom: 10,
              }}
              source={require("../../assets/pngwing.com.png")}
            />
            <View style={{ position: "absolute", bottom: 10, right: 0 }}>
              <Ionicons name={"create-outline"} size={34} color={"white"} />
            </View>
          </View>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "white",
              marginBottom: 20,
            }}
          >
            Admin
          </Text>
          <View
            style={{
              width: "60%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              left: 20,
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 15,
                paddingVertical: 6,
                borderWidth: 2,
                borderRadius: 20,
                borderColor: "white",
              }}
            >
              <Text style={{ fontSize: 18, color: "white" }}>
                Cap nhat thong tin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name={"log-out-outline"} size={34} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          style={{
            flex: 1,

            paddingHorizontal: 30,
            paddingTop: 30,
          }}
        >
          <InputCus title="Nickname" />
          <InputCus title="Email" password />
          <InputCus title="Password" password />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

export default InfoScreen;
