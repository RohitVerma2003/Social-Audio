import Header from "@/components/Header";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const addRoom = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Add Room</Text>
      </View>
    </SafeAreaView>
  );
};

export default addRoom;

const styles = StyleSheet.create({});
