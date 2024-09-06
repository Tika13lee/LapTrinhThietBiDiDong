import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/ui/Login";
import Login1a from "./src/ui/Login1a";
import Login1b from "./src/ui/Login1b";

export default function App() {
  return <Login1b />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
