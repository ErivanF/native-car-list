import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screeens/LoginScreen";
import HomeScreen from "./src/Screeens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./src/Types";

export default function App() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
