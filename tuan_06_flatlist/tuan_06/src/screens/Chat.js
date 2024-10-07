import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    id: 1,
    title: "Ca nấu lẩu, nấu mì mini siêu tốc 2 trong 1 2.5L",
    note: "Shop Devang",
    image: require("../../assets/ca_nau_lau.png"),
  },
  {
    id: 2,
    title: "1 KG khô gà bơ tỏi ăn liền",
    note: "LTD Food",
    image: require("../../assets/ga_bo_toi.png"),
  },
  {
    id: 3,
    title: "Xe cần cẩu đa năng",
    note: "Thế giới đồ chơi",
    image: require("../../assets/xa_can_cau.png"),
  },
  {
    id: 4,
    title: "Đồ chơi dạng mô hình",
    note: "Thế giới đồ chơi",
    image: require("../../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: 5,
    title: "Lãnh đạo giản đơn",
    note: "Minh Long Book",
    image: require("../../assets/lanh_dao_gian_don.png"),
  },
  {
    id: 6,
    title: "Hiểu lòng con trẻ",
    note: "Minh Long Book",
    image: require("../../assets/hieu_long_con_tre.png"),
  },
  {
    id: 7,
    title: "Ca nấu lẩu, nấu mì mini",
    note: "Shop Devang",
    image: require("../../assets/ca_nau_lau.png"),
  },
  {
    id: 8,
    title: "Ca nấu lẩu, nấu mì mini",
    note: "Shop Devang",
    image: require("../../assets/ca_nau_lau.png"),
  },
  {
    id: 9,
    title: "Ca nấu lẩu, nấu mì mini",
    note: "Shop Devang",
    image: require("../../assets/ca_nau_lau.png"),
  },
];

const Item = ({ title, note, image }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      columnGap: 13,
      paddingVertical: 10,
    }}
  >
    <Image source={image} />
    <View style={{ flex: 1 }}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={{ width: "100%" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 13, color: "rgba(125, 91, 91, 1)" }}>
        {note}
      </Text>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(243, 17, 17, 1)",
        height: 38,
        width: 88,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white", fontSize: 16 }}>Chat</Text>
    </TouchableOpacity>
  </View>
);

export default function Chat() {
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
          <Text>Chat</Text>
          <Image
            style={styles.image}
            source={require("../../assets/bi_cart-check.png")}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "rgba(196, 196, 196, 1)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            padding: 15,
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
      <View style={{ padding: 10, paddingBottom: 50 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item title={item.title} note={item.note} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
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
