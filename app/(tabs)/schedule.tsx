import Header from "@/components/Header";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const schedule = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Schedule</Text>
      </View>
    </SafeAreaView>
  );
};

export default schedule;

const styles = StyleSheet.create({});
