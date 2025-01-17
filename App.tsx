import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/Screeens/LoginScreen";
import HomeScreen from "./src/Screeens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./src/Types";
import UserProvider from "./src/Providers/UserProvider";

export default function App() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Model" component={ModelScreen} />
          {}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
