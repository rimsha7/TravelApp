import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen...again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;

const HotelsStack = ({ navigation }) => (
  <HotelsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HotelsStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HotelsStack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
