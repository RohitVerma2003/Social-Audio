import Header from "@/components/Header";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.welcomeScreen}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/icons/house.png")}
            style={styles.image}
          />
          <Text style={styles.welcomeHeading}>Room</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  welcomeScreen: {
    width: "100%",
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeHeading: {
    fontFamily: "Inter_500Medium",
    fontSize: 40,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderBottomWidth: 3,
    paddingHorizontal: 10,
    borderColor: "#8BAE66"
  },
});
