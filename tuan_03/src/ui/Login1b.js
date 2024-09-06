import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login1b() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={{ flex: 100 }}
    >
      <View
        style={{ flex: 40, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={require("../../assets/lock.png")} />
      </View>
      <View style={{ flex: 60, alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 50,
          }}
        >
          FORGET {"\n"} PASSWORD
        </Text>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginBottom: 50 }}
        >
          Provide your account’s email for which you {"\n"} want to reset your
          password
        </Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#C4C4C4",
            width: 350,
            marginBottom: 30,
          }}
        >
          <Image source={require("../../assets/mail.png")} />
          <View style={{ width: 10 }} />
          <TextInput placeholder="Email"></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#E3C000",
              width: 350,
              height: 50,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                lineHeight: 50,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login1b;
