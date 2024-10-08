import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";

export default function MasterPortrait({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Donut");

  const getProduct = async () => {
    try {
      if (title === "Donut") {
        const response = await fetch(
          "https://67038e71ab8a8f8927309934.mockapi.io/api/products/Product"
        );
        const json = await response.json();
        setData(json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={{
          backgroundColor: "rgba(244, 221, 221, 1)",
          width: "100%",
          height: 115,
          borderRadius: 10,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate("DetailPortrait", { item })}
      >
        <View style={{ flexDirection: "row", padding: 7, columnGap: 15 }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <View style={{ justifyContent: "space-around" }}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>{item.name}</Text>
            <Text>Spicy tasty donut family</Text>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              {item.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/plus_button.png")}
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
      </Pressable>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginTop: 40,
      }}
    >
      <View style={{ marginBottom: 25 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "rgba(0, 0, 0, 0.65)",
          }}
        >
          Welcome, Jala!
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>
          Choice you Best food
        </Text>
      </View>
      <View
        style={{
          marginBottom: 25,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder={"Search food"}
          style={{
            height: 46,
            width: 266,
            backgroundColor: "rgba(196, 196, 196, 0.1)",
            borderWidth: 1,
            borderColor: "rgba(196, 196, 196, 1)",
            paddingLeft: 15,
          }}
        />
        <Image source={require("../assets/search.png")} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={[styles.btn, title === "Donut" && styles.active]}
          onPress={() => setTitle("Donut")}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, title === "Pink Donut" && styles.active]}
          onPress={() => setTitle("Pink Donut")}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, title === "Floating" && styles.active]}
          onPress={() => setTitle("Floating")}
        >
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Floating</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingTop: 15 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 101,
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "rgba(241, 176, 0, 1)",
  },
});
