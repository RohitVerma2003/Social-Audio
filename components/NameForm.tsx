import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const NameForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="First"/>
      <TextInput style={styles.input} placeholder="last" />
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameForm;

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
    fontWeight: "bold",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#8BAE66",
    width: "50%",
    marginBottom: 15,
    padding: 16,
    borderRadius: 15,
    display: "flex",
    alignSelf: "center"    
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "white"
  },
});
