import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login1a() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={{ flex: 100 }}
    >
      <View
        style={{ flex: 40, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={require("../../assets/Ellipse.png")} />
      </View>
      <View style={{ flex: 60 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 50,
          }}
        >
          GROW {"\n"} YOUR BUSINESS
        </Text>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginBottom: 50 }}
        >
          We will help you to grow your business using {"\n"} online server
        </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#E3C000",
                width: 130,
                height: 50,
                borderRadius: 10,
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
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#E3C000",
                width: 130,
                height: 50,
                borderRadius: 10,
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
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 25 }}
          >
            HOW WE WORK?
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login1a;
