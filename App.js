import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/index";
import PushUpsScreen from "/project/workspace/components/Repetition/pushup.js";
import SquatsScreen from "/project/workspace/components/Repetition/squats.js";
import RunningScreen from "./components/Duration/running.js";
import PlanksScreen from "./components/Duration/planks.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Let's Workout!",
            headerTitleAlign: "center", // Centers the title
            headerStyle: {
              backgroundColor: "#061B78", 
            },
            headerTintColor: "#FFFAEC", 
          }}
        />
        
        {/* Push-Ups Screen */}
        <Stack.Screen
          name="Push-Ups"
          component={PushUpsScreen}
          options={{
            headerTitle: "Push Ups",
            headerTitleAlign: "center", // Centers the title
            headerStyle: {
              backgroundColor: "#061B78", 
            },
            headerTintColor: "#FFFAEC", 
          }}
        />
        
        {/* Squats Screen */}
        <Stack.Screen
          name="Squats"
          component={SquatsScreen}
          options={{
            headerTitle: "Squats",
            headerTitleAlign: "center", // Centers the title
            headerStyle: {
              backgroundColor: "#061B78", 
            },
            headerTintColor: "#FFFAEC",
          }}
        />
        
        {/* Running Screen */}
        <Stack.Screen
          name="Running"
          component={RunningScreen}
          options={{
            headerTitle: "Running",
            headerTitleAlign: "center", // Centers the title
            headerStyle: {
              backgroundColor: "#061B78", 
            },
            headerTintColor: "#FFFAEC",
          }}
        />
        
        {/* Planks Screen */}
        <Stack.Screen
          name="Planks"
          component={PlanksScreen}
          options={{
            headerTitle: "Planks",
            headerTitleAlign: "center", 
            headerStyle: {
              backgroundColor: "#061B78",
            },
            headerTintColor: "#FFFAEC", 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
