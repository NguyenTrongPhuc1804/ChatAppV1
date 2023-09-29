import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputCus = ({ password, title }) => {
  const [eye, setEye] = useState(true);
  return (
    <View style={{ marginBottom: 10, position: "relative" }}>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>{title}</Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 20,
        }}
        secureTextEntry={eye}
        placeholder="asdasd"
      />
      {password ? (
        <TouchableOpacity
          onPress={() => {
            setEye(!eye);
          }}
          style={{ position: "absolute", bottom: 8, right: 10 }}
        >
          <Ionicons name={eye ? "eye-off" : "eye"} size={24} color={"black"} />
        </TouchableOpacity>
      ) : (
        ""
      )}
    </View>
  );
};

export default InputCus;
