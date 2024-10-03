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
    const response = await fetch(
      "https://66fc9c94c3a184a84d177b3f.mockapi.io/api/post/posts"
    );
    const data = await response.json();
    console.log("Data from API: ", data);
    setPost(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={{ color: "#000" }}>{item.name}</Text>
        {/* <Text style={{ color: "#000" }}>{item.body}</Text> */}
      </View>
    );
  };

  return (
    <View style={{ rowGap: 20, width: "80%" }}>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "green" }]}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "yellow" }]}>
        <Text style={styles.text}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
});
