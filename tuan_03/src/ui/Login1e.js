import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

function Login1e() {
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
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>REGISTER</Text>
      </View>
      <View
        style={{
          flex: 60,
          width: 350,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
            justifyContent: "center",
            paddingHorizontal: 13,
          }}
        >
          <TextInput style={{ fontSize: 20 }}>
            <Text>Name</Text>
          </TextInput>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
            justifyContent: "center",
            paddingHorizontal: 13,
          }}
        >
          <TextInput style={{ fontSize: 20 }}>
            <Text>Phone</Text>
          </TextInput>
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
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
        <View
          style={{
            height: 50,
            backgroundColor: "#C4C4C44D",
            justifyContent: "center",
            paddingHorizontal: 13,
          }}
        >
          <TextInput style={{ fontSize: 20 }}>
            <Text>Birthday</Text>
          </TextInput>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity style={styles.radioButtonContainer}>
            <View style={styles.radioButton}></View>
            <Text style={styles.label}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioButtonContainer}>
            <View style={styles.radioButton}></View>
            <Text style={styles.label}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            width: 350,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <Text>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  label: {
    fontSize: 18,
    color: "#000",
  },
});

export default Login1e;
