import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const exercises = [
  { id: "1", title: "Push-Ups" },
  { id: "2", title: "Squats" },
  { id: "3", title: "Running" },
  { id: "4", title: "Planks" },
];

const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Button
      title={item.title}
      onPress={() =>
        navigation.navigate(item.title, { exercises }) //passes data via params
      }
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      containerStyle={styles.buttonContainer}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFAE2B",
    padding: 20,
  },
  button: {
    backgroundColor: "#FFFFEC",
    borderColor: "#061B78",
    borderWidth: 2,
    marginBottom: 20,
  },
  buttonText: {
    color: "#061B78",
  },
  buttonContainer: {
    borderRadius: 8,
  },
});

export default Home;
