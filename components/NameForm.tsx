import { updateName } from "@/redux/userSlice";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

type UserName = {
  firstName: string | null;
  lastName: string | null;
};

const NameForm = () => {
  const [userName, setUsername] = useState<UserName>({
    firstName: null,
    lastName: null,
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateName(userName));
    router.push("/username");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First"
        onChangeText={(text) => setUsername({ ...userName, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="last"
        onChangeText={(text) => setUsername({ ...userName, lastName: text })}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleSubmit}
      >
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
    fontSize: 15,
    fontFamily: "Inter_700Bold",
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
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontFamily: "Inter_900Black",
  },
});
