import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SquatsScreen = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  const goToRunning = () => {
    navigation.navigate("Running");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFAE2B" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Squats</Text>
      <Text style={{ fontSize: 36, marginBottom: 20 }}>{count}</Text>

      {/* Add 1 Button */}
      <TouchableOpacity
        onPress={incrementCounter}
        style={{
          marginBottom: 20,
          backgroundColor: "#FFFAEC",
          borderColor: "#061B78",
          borderWidth: 2,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Add 1</Text>
      </TouchableOpacity>

      {/* Reset Button */}
      <TouchableOpacity
        onPress={resetCounter}
        style={{
          marginBottom: 20,
          backgroundColor: "#FFFAEC",
          borderColor: "#061B78",
          borderWidth: 2,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Reset</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity
        onPress={goHome}
        style={{
          marginBottom: 20,
          backgroundColor: "#FFFAEC",
          borderColor: "#061B78",
          borderWidth: 2,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Home</Text>
      </TouchableOpacity>

      {/* Suggested Running Button */}
      <TouchableOpacity
        onPress={goToRunning}
        style={{
          backgroundColor: "#FFFAEC",
          borderColor: "#061B78",
          borderWidth: 2,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Try Running!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SquatsScreen;
