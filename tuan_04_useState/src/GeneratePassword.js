import React from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";

export default function GeneratePassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const generatePassword = () => {
    if (length < 8) {
      alert("Password length must be at least 8 characters.");
      return;
    }
    const lowcase = "abcdefghijklmnopqrstuvwxyz";
    const upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const special = "!@#$%^&*()";
    let characters = "";
    let newPassword = "";

    if (isChecked) {
      newPassword += lowcase.charAt(Math.floor(Math.random() * lowcase.length));
      characters += lowcase;
    }
    if (isChecked2) {
      newPassword += upcase.charAt(Math.floor(Math.random() * upcase.length));
      characters += upcase;
    }
    if (isChecked3) {
      newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
      characters += numbers;
    }
    if (isChecked4) {
      newPassword += special.charAt(Math.floor(Math.random() * special.length));
      characters += special;
    }

    const passwordLength = Math.max(length, newPassword.length);
    while (newPassword.length < passwordLength) {
      newPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    newPassword = newPassword.split("");
    for (let i = newPassword.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = newPassword[i];
      newPassword[i] = newPassword[j];
      newPassword[j] = temp;
    }

    setPassword(newPassword);
  };

  return (
    <LinearGradient colors={["#3B3B98", "#C4C4C400"]} style={{ flex: 100 }}>
      <View
        style={{
          backgroundColor: "#23235B",
          flex: 100,
          margin: 27,
          borderRadius: 15,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
          }}
        >
          PASSWORD {"\n"} GENERATOR
        </Text>
        <TextInput
          style={{ backgroundColor: "#151537", width: "90%", height: 55 }}
          editable={false}
        >
          <Text style={styles.text}>{password}</Text>
        </TextInput>
        <View
          style={{
            width: "90%",
            height: "40%",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>Password length</Text>
            <TextInput
              style={{ backgroundColor: "#fff", height: 33, width: "40%" }}
              keyboardType="numeric"
              value={length}
              onChangeText={setLength}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Include lower case letters</Text>
            <Checkbox
              style={{ backgroundColor: "#fff" }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Include upcase letters</Text>
            <Checkbox
              style={{ backgroundColor: "#fff" }}
              value={isChecked2}
              onValueChange={setChecked2}
              color={isChecked2 ? "#4630EB" : undefined}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Include number</Text>
            <Checkbox
              style={{ backgroundColor: "#fff" }}
              value={isChecked3}
              onValueChange={setChecked3}
              color={isChecked3 ? "#4630EB" : undefined}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Include special symbol</Text>
            <Checkbox
              style={{ backgroundColor: "#fff" }}
              value={isChecked4}
              onValueChange={setChecked4}
              color={isChecked4 ? "#4630EB" : undefined}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#3B3B98",
            width: "90%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={() => {
            generatePassword();
          }}
        >
          <Text style={styles.text}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
