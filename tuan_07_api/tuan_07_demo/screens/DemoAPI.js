import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";

export default function DemoAPI() {
  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={{ color: "#000", fontSize: 16, fontWeight: "600" }}>
          {item.title}
        </Text>
        {/* <Text style={{ color: "#000" }}>{item.body}</Text> */}
      </View>
    );
  };

  return (
    <View style={{ rowGap: 20, width: "80%", flex: 1, marginTop: 50 }}>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "green" }]}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "#FFCC00" }]}>
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemContainer: {
    padding: 10,
    backgroundColor: "#d1d1d1",
    marginVertical: 8,
    // marginHorizontal: 16,
    borderRadius: 10,
  },
});
