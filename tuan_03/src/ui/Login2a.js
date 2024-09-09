import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login2a() {
  return (
    <LinearGradient
      colors={["#FBCB00", "#BF9A00"]}
      style={{ flex: 100, justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          flex: 25,
          alignItems: "flex-start",
          justifyContent: "center",
          width: 350,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
      </View>
      <View
        style={{
          flex: 35,
          width: 350,
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
            paddingHorizontal: 13,
            borderColor: "#F2F2F2",
            borderWidth: 1,
            marginBottom: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../../assets/avatar_user.png")} />
          <View style={{ width: 10 }} />
          <TextInput style={{ fontSize: 20 }}>
            <Text>Name</Text>
          </TextInput>
        </View>
        <View
          style={{
            backgroundColor: "#C4C4C44D",
            flexDirection: "row",
            height: 50,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 13,
            borderColor: "#F2F2F2",
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/lock1.png")} />
            <View style={{ width: 10 }} />
            <TextInput style={{ fontSize: 20 }}>
              <Text>Password</Text>
            </TextInput>
          </View>
          <Image source={require("../../assets/eye1.png")} />
        </View>
      </View>
      <View
        style={{
          flex: 40,
          width: 350,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#060000",
            width: 350,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>CREATE ACCOUNT</Text>
      </View>
    </LinearGradient>
  );
}

export default Login2a;
