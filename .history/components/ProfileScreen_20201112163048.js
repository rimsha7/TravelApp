import React from "react";
import { View, Text, Button, StyleSheet, AsyncStorage } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
