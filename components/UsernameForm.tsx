import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const UsernameForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="@Superboy" />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPressOut={() => router.replace("/(tabs)")}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UsernameForm;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: "auto",
  },
  input: {
    backgroundColor: "#1111",
    width: "100%",
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    fontSize: 15,
    fontFamily: "Inter_700Bold"
  },
  button: {
    backgroundColor: "#8BAE66",
    width: "50%",
    marginBottom: 15,
    padding: 16,
    borderRadius: 15,
    display: "flex",
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "Inter_900Black",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
});
