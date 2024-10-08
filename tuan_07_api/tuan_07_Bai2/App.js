import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MasterPortrait, DetailPortrait } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MasterPortrait" component={MasterPortrait} />
        <Stack.Screen name="DetailPortrait" component={DetailPortrait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
