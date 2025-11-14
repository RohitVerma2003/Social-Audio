import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const BackButton = () => {
  const goBack = () => {
    if (router.canGoBack()) router.back();
  };
  return (
    <TouchableOpacity style={styles.container} onPressOut={goBack}>
      <AntDesign name="caret-left" size={20} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#1111",
    padding: 8,
    borderRadius: 12,
  },
});
