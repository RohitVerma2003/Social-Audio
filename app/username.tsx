import BackButton from "@/components/BackButton";
import UsernameForm from "@/components/UsernameForm";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Username = () => {
  return (
    <>
      <BackButton />
      <View style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.heading}>Pick a username</Text>
          <Text style={styles.subHeading}>Choose a ditinct username</Text>
        </View>
        <UsernameForm />
      </View>
    </>
  );
};

export default Username;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontFamily: "Inter_900Black"
  },
  subHeading: {
    textAlign: "center",
    fontFamily: "Inter_300Light",
  },
});
