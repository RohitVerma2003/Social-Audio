import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Image
          source={require("../assets/icons/person1.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.greetings}>Good Evening</Text>
          <Text style={styles.name}>Rohit Verma</Text>
        </View>
      </View>
      <Ionicons name="search-outline" size={20} style={styles.icon}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 75,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: "#FF8F8F",
    borderRadius: 15,
  },
  leftHeader: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  greetings: {
    fontFamily: "Inter_400Medium",
    fontSize: 13,
    color: "#727D73",
  },
  name: {
    fontFamily: "Inter_900Black",
    fontSize: 20,
  },
  icon:{
    backgroundColor: "#1111",
    padding: 7,
    borderRadius: 10
  }
});
