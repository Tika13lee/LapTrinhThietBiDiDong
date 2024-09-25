import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Chat from "./src/screens/Chat";
import Search from "./src/screens/Search";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" hidden />
      <Search />
    </SafeAreaView>
  );
}
