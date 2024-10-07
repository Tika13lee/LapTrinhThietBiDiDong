import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Screen02({ navigation }) {
  const [color, setColor] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/vs_blue.png")}
          style={{ height: 132, width: 112, objectFit: "contain" }}
        />
        <Text>Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng</Text>
      </View>
      <View
        style={{ backgroundColor: "#C4C4C4", flex: 1, paddingHorizontal: 15 }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 15 }}>
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            alignItems: "center",
            height: "70%",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            style={[
              {
                width: 85,
                height: 80,
                backgroundColor: "#e3d8de",
                shadowColor: "#000",
                elevation: 5,
              },
              color === "#e3d8de" && styles.active,
            ]}
            onPress={() => setColor("#e3d8de")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                width: 85,
                height: 80,
                backgroundColor: "#F30D0D",
                shadowColor: "#000",
                elevation: 5,
              },
              color === "#F30D0D" && styles.active,
            ]}
            onPress={() => setColor("#F30D0D")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                width: 85,
                height: 80,
                backgroundColor: "#000000",
                shadowColor: "#000",
                elevation: 5,
              },
              color === "#000000" && styles.active,
            ]}
            onPress={() => setColor("#000000")}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                width: 85,
                height: 80,
                backgroundColor: "#234896",
                shadowColor: "#000",
                elevation: 5,
              },
              color === "#234896" && styles.active,
            ]}
            onPress={() => setColor("#234896")}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 44,
            borderRadius: 10,
            borderColor: "rgba(202, 21, 54, 1)",
            backgroundColor: "rgba(25, 82, 226, 0.58)",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Color", { color: color });
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#F9F2F2" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    borderWidth: 2,
    borderColor: "white",
  },
});
