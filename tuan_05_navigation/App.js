import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen01 from "./src/screens/Screen01";
import Screen02 from "./src/screens/Screen02";
import Screen03 from "./src/screens/Screen03";
import Screen04 from "./src/screens/Screen04";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen01} />
        <Stack.Screen name="ChooseColor" component={Screen02} />
        <Stack.Screen name="Color" component={Screen03} />
        <Stack.Screen name="Detail" component={Screen04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
