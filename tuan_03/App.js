import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/ui/Login";
import Login1a from "./src/ui/Login1a";
import Login1b from "./src/ui/Login1b";
import Login1c from "./src/ui/Login1c";

export default function App() {
  return <Login1c />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
