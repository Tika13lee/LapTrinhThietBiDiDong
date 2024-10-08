import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function API_Screen_03({ navigation }) {
  const [job, setJob] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginTop: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
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
            <Text>Have a great day ahead</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../assets/back.png")} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: "700", textAlign: "center" }}>
          ADD YOUR JOB
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "rgba(144, 149, 160, 1)",
            borderRadius: 5,
            height: 44,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Input your job"
            style={{ paddingLeft: 40 }}
            value={job}
            onChangeText={(text) => setJob(text)}
          />
          <Image
            source={require("../assets/job.png")}
            style={{ position: "absolute", top: 9, left: 10 }}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 44,
            width: 190,
            backgroundColor: "rgba(0, 189, 214, 1)",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            alignSelf: "center",
            marginTop: 20,
          }}
          onPress={() => {
            navigation.navigate("API_Screen_02", { job });
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}>
            FINISH
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "400",
            }}
          >
            →
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require("../assets/book.png")}
        style={{
          width: 271,
          height: 271,
          alignSelf: "center",
          marginBottom: 20,
          marginTop: 100,
        }}
      />
    </View>
  );
}
