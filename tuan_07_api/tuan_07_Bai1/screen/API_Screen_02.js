import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function API_Screen_02({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "space-around",
        paddingHorizontal: 15,
        marginTop: 20,
      }}
    >
      <View style={{ rowGap: 20 }}>
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
      <View
        style={{
          height: "60%",
          justifyContent: "space-between",
          marginBottom: 50,
        }}
      >
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <View
          style={{
            height: 48,
            backgroundColor: "rgba(222, 225, 230, 0.47)",
            borderRadius: 24,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
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
          <Image source={require("../assets/edit.png")} />
        </View>
        <Pressable
          style={{
            width: 69,
            height: 69,
            backgroundColor: "rgba(0, 189, 214, 1)",
            borderRadius: 99,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={() => {
            navigation.navigate("API_Screen_03");
          }}
        >
          <Image source={require("../assets/plus.png")} />
        </Pressable>
      </View>
    </View>
  );
}
