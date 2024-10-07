import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function API_Screen_01({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 80,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ height: "65%", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/book.png")}
          style={{ width: 271, height: 271, alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "rgba(131, 83, 226, 1)",
            textAlign: "center",
          }}
        >
          MANAGE YOUR {"\n"} TASK
        </Text>
        <View style={{ position: "relative" }}>
          <TextInput
            placeholder="Enter your email"
            style={{
              height: 43,
              width: 334,
              borderWidth: 1,
              borderColor: "rgba(144, 149, 160, 1)",
              borderRadius: 12,
              paddingLeft: 40,
            }}
          ></TextInput>
          <Image
            source={require("../assets/email.png")}
            style={{ width: 20, position: "absolute", left: 10, top: 11 }}
          />
        </View>
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
        }}
        onPress={() => {
          navigation.navigate("API_Screen_02");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "400" }}>
          GET STARTED
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
  );
}
