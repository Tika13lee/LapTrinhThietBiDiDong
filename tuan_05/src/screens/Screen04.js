import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Screen04({ route }) {
  const { color } = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          height: "80%",
          marginBottom: 45,
        }}
      >
        <View style={{ alignItems: "center", padding: 10 }}>
          <Image
            source={
              color === "#234896"
                ? require("../../assets/vs_blue1.png")
                : color === "#000000"
                ? require("../../assets/vs_black.png")
                : color === "#F30D0D"
                ? require("../../assets/vs_red.png")
                : require("../../assets/vs_silver.png")
            }
            style={{ height: 324, objectFit: "contain" }}
          />
        </View>
        <Text style={styles.text}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../../assets/star.png")} />
            <Image source={require("../../assets/star.png")} />
            <Image source={require("../../assets/star.png")} />
            <Image source={require("../../assets/star.png")} />
            <Image source={require("../../assets/star.png")} />
          </View>
          <Text style={styles.text}>(Xem 828 đánh giá)</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "#a8a8a8",
              textDecorationLine: "line-through",
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}
        >
          <Text style={{ fontSize: 12, fontWeight: "700", color: "red" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <View
            style={{
              borderWidth: 2,
              width: 20,
              height: 20,
              borderRadius: 99,
              borderColor: "#a9a9a9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center" }}>?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderStyle: "solid",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingLeft: 60,
            height: 34,
          }}
          onPress={() => {
            navigation.navigate("ChooseColor");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            4 MÀU-CHỌN LOẠI
          </Text>
          <Image source={require("../../assets/Vector.png")} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 44,
          borderRadius: 10,
          backgroundColor: "#CA1536",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#F9F2F2" }}>
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000",
  },
});
