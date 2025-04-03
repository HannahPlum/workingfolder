import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RunningScreen = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formattedTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = (time % 60).toFixed(2).padStart(5, "0");
    return `${minutes < 10 ? "0" : ""}${minutes} : ${seconds}`;
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const toggleRunning = () => {
    setIsRunning((prevState) => !prevState);
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  const goToPlanks = () => {
    navigation.navigate("Planks");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFAE2B" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Running</Text>
      <Text style={{ fontSize: 48, marginBottom: 20 }}>{formattedTime()}</Text>

      {/* Start/Stop Button */}
      <TouchableOpacity
        onPress={toggleRunning}
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
        <Text style={{ color: "#061B78", fontSize: 16 }}>{isRunning ? "Stop" : "Start"}</Text>
      </TouchableOpacity>

      {/* Reset Button */}
      <TouchableOpacity
        onPress={resetTimer}
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

      {/* Suggested Planks Button */}
      <TouchableOpacity
        onPress={goToPlanks}
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
        <Text style={{ color: "#061B78", fontSize: 16 }}>Try Planks!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RunningScreen;
