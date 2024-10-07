import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Screen03({ route, navigation }) {
  const { color } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", padding: 10, columnGap: 10 }}>
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
          style={{ height: 132, width: 112, objectFit: "contain" }}
        />
        <View style={{ justifyContent: "space-around" }}>
          <Text>Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng</Text>
          <Text>
            Màu :
            <Text style={{ fontWeight: "700" }}>
              {" "}
              {color === "#234896"
                ? "Xanh đậm"
                : color === "#000000"
                ? "Đen"
                : color === "#F30D0D"
                ? "Đỏ"
                : "Bạc"}
            </Text>
          </Text>
          {color === "#234896"}
          <Text>
            Cung cấp bởi{" "}
            <Text style={{ fontWeight: "700" }}>Tiki Tradding</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
        </View>
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
            navigation.navigate("Detail", { color: color });
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
