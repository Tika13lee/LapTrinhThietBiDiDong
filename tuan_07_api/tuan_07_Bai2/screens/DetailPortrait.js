import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

export default function DetailPortrait({ route, navigation }) {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        rowGap: 35,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: item.image }}
          style={{ width: 272, height: 272 }}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Spicy tasty donut family</Text>
          <Text style={styles.title}>
            {item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ flexDirection: "row", columnGap: 15 }}>
            <Image source={require("../assets/clock.png")} />
            <Text style={styles.text}>Delivery in</Text>
          </View>
          <Text style={styles.title}>30 min</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 15 }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(241, 176, 0, 1)",
              width: 31,
              height: 31,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{quantity}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(241, 176, 0, 1)",
              width: 31,
              height: 31,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Restaurants info</Text>
        <Text style={styles.text}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(241, 176, 0, 1)",
          width: 316,
          height: 58,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        onPress={() => navigation.navigate("MasterPortrait")}
      >
        <Text style={{ fontSize: 25, fontWeight: "700", color: "#fff" }}>
          Add to card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.54)",
  },
});
