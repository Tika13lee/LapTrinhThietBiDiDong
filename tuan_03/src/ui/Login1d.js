import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

function Login1d() {
  return (
    <View
      style={{
        flex: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#31AA5230",
      }}
    >
      <View style={{ flex: 20, justifyContent: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>LOGIN</Text>
      </View>
      <View
        style={{
          flex: 30,
          width: 350,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
            marginBottom: 30,
            justifyContent: "center",
            paddingHorizontal: 13,
          }}
        >
          <TextInput style={{ fontSize: 20 }}>
            <Text>Email</Text>
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
          }}
        >
          <TextInput style={{ fontSize: 20 }}>
            <Text>Password</Text>
          </TextInput>
          <Image source={require("../../assets/eye.png")} />
        </View>
      </View>
      <View
        style={{
          flex: 30,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
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
              color: "white",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
        <Text style={{ color: "#5D25FA" }}>For got your password?</Text>
        <Text>Or login with</Text>
      </View>
      <View
        style={{
          flex: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: 350,
        }}
      >
        <View
          style={{
            backgroundColor: "#25479B",
            width: "33%",
            alignItems: "center",
            height: 50,
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/icofacebook.png")} />
        </View>
        <View
          style={{
            backgroundColor: "#0F8EE0",
            width: "33%",
            alignItems: "center",
            height: 50,
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/icozalo.png")} />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            width: "33%",
            alignItems: "center",
            height: 50,
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/icogoogle.png")} />
        </View>
      </View>
    </View>
  );
}

export default Login1d;
