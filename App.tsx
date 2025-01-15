import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
// App.js

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-700">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
