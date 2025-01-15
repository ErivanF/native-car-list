import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
// App.js

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-700">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
