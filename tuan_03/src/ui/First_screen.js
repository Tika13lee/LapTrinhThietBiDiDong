import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function First_screen() {
  return (
    <View style={{ backgroundColor: "#00CCF9", flex: 100 }}>
      <View
        style={{ flex: 40, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={require("../../assets/Ellipse.png")} />
      </View>
      <View style={{ flex: 60, justifyContent: "space-around" }}>
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          We will help you to grow your business using {"\n"} online server
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
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
      </View>
    </View>
  );
}

export default First_screen;
