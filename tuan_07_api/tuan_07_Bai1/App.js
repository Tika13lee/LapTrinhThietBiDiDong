import { StatusBar } from "expo-status-bar";
import { API_Screen_01, API_Screen_02, API_Screen_03 } from "./screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="API_Screen_01" component={API_Screen_01} />
        <Stack.Screen name="API_Screen_02" component={API_Screen_02} />
        <Stack.Screen name="API_Screen_03" component={API_Screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
