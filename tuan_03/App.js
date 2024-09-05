import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import First_screen from "./src/ui/First_screen";

export default function App() {
  return <First_screen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
