import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const PushUpsScreen = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const route = useRoute(); //this accesses the passed params
  const { exercises } = route.params; //this extracts the exercises array

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  const goToSquats = () => {
    navigation.navigate("Squats", { exercises });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFAE2B" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Push-ups</Text>
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
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Home</Text>
      </TouchableOpacity>

      {/*suggested Squats Button */}
      <TouchableOpacity
        onPress={goToSquats}
        style={{
          backgroundColor: "#FFFAEC",
          borderColor: "#061B78",
          borderWidth: 2,
          borderRadius: 5,
          paddingVertical: 12,
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#061B78", fontSize: 16 }}>Try Squats!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PushUpsScreen;
