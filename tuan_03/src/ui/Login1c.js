import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Login1c() {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={{ flex: 100 }}
    >
      <View
        style={{ flex: 40, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 60, fontWeight: "bold" }}>CODE</Text>
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
          VERIFICATION
        </Text>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", marginBottom: 50 }}
        >
          Enter ontime password sent on {"\n"}
          ++849092605798
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginBottom: 30,
          }}
        >
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
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
              VERIFY CODE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Login1c;
