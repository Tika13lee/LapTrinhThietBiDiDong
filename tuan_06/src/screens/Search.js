import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
} from "react-native";

const data = [
  {
    id: 1,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/giacchuyen.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 2,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/daynguon.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 3,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/dauchuyendoipsps2.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 4,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/dauchuyendoi.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 5,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/carbusbtops2.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 6,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/daucam.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 7,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/giacchuyen.png"),
    price: 69000,
    discount: "-39%",
  },
  {
    id: 8,
    title: "Cáp chuyển từ Cổng USB sang PS2 (Keyboard/Mouse)",
    image: require("../../assets/giacchuyen.png"),
    price: 69000,
    discount: "-39%",
  },
];

const Item = ({ title, image, price, discount }) => (
  <View
    style={{
      backgroundColor: "#fff",
      margin: 10,
      borderRadius: 10,
      padding: 10,
      width: 160,
    }}
  >
    <Image style={{ width: 140, height: 90 }} source={image} />
    <View style={{ rowGap: 5, marginTop: 10 }}>
      <Text
        style={{ fontSize: 12, fontWeight: "400", width: "100%" }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Image source={require("../../assets/Group4.png")} />
      <View
        style={{ flexDirection: "row", columnGap: 20, alignItems: "center" }}
      >
        <Text style={{ fontSize: 12, fontWeight: "700" }}>
          {price.toLocaleString("vi-VN") + "đ"}
        </Text>
        <Text
          style={{
            color: "rgba(150, 157, 170, 1)",
            fontSize: 12,
            fontWeight: "400",
          }}
        >
          {discount}
        </Text>
      </View>
    </View>
  </View>
);

export default function Search() {
  return (
    <View style={{ backgroundColor: "#e5e5e5", flex: 1 }}>
      <View
        style={{
          backgroundColor: "rgba(27, 169, 255, 1)",
          justifyContent: "center",
          height: 42,
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={styles.image}
            source={require("../../assets/ant-design_arrow-left-outlined.png")}
          />
          <View
            style={{
              width: 192,
              height: 30,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              style={[styles.image, { marginLeft: 10 }]}
              source={require("../../assets/search.png")}
            />
            <TextInput
              style={{ flex: 1, height: "100%", paddingHorizontal: 10 }}
            />
          </View>
          <View>
            <View
              style={{
                backgroundColor: "rgba(233, 56, 56, 1)",
                width: 17,
                height: 17,
                borderRadius: 50,
                position: "absolute",
                top: -7,
                right: -5,
                zIndex: 1,
              }}
            ></View>
            <Image
              style={styles.image}
              source={require("../../assets/bi_cart-check.png")}
            />
          </View>
          <Image
            style={{ width: 13, height: 3 }}
            source={require("../../assets/Group2.png")}
          />
        </View>
      </View>
      <View style={{ paddingBottom: 90 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
      <View
        style={{
          backgroundColor: "rgba(27, 169, 255, 1)",
          justifyContent: "center",
          height: 42,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={styles.image}
            source={require("../../assets/Group10.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/home.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/return.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});
