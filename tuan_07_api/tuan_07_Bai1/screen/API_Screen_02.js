import React, { useEffect, useState } from "react";
import {
  Alert,
  Flatlist,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function API_Screen_02({ route, navigation }) {
  const job = route?.params?.job || "";
  const [jobs, setJobs] = useState([job]);

  useEffect(() => {
    if (job) {
      setJobs((prevJobs) => [...prevJobs, job]);
    }
  }, [route.params]);

  const handleDeletePress = (index) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this job?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setJobs((prevJobs) => prevJobs.filter((_, i) => i !== index));
          },
        },
      ],
      { cancelable: false }
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
      <View style={{ rowGap: 20, marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require("../assets/back.png")} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Image source={require("../assets/user.png")} />
            <View>
              <Text>Hi Twinkle</Text>
              <Text>Have agrate day a head</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "rgba(144, 149, 160, 1)",
            borderRadius: 5,
            height: 44,
            justifyContent: "center",
          }}
        >
          <TextInput placeholder="Search" style={{ paddingLeft: 40 }} />
          <Image
            source={require("../assets/search.png")}
            style={{ position: "absolute", top: 8, left: 10 }}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 40,
        }}
      >
        <View style={styles.tag}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 15,
            }}
          >
            <Image source={require("../assets/tick.png")} />
            <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 26 }}>
              To check email
            </Text>
          </View>
          {/* <Image source={require("../assets/edit.png")} /> */}
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6861/6861362.png",
            }}
            style={{ width: 20, height: 20 }}
          />
        </View>

        {jobs.map((jobItem, index) => (
          <View key={index} style={styles.tag}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 15,
              }}
            >
              <Image source={require("../assets/tick.png")} />
              <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 26 }}>
                {jobItem}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleDeletePress(index)}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/6861/6861362.png",
                }}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={{
          width: 69,
          height: 69,
          backgroundColor: "rgba(0, 189, 214, 1)",
          borderRadius: 99,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginVertical: 30,
        }}
        onPress={() => {
          navigation.navigate("API_Screen_03");
        }}
      >
        <Image source={require("../assets/plus.png")} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    height: 48,
    backgroundColor: "rgba(222, 225, 230, 0.47)",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
