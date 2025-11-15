import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = () => {
  const images = [
    require("../assets/icons/person1.png"),
    require("../assets/icons/person2.png"),
    require("../assets/icons/person3.png"),
    require("../assets/icons/person4.png"),
    require("../assets/icons/person5.png"),
  ];
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.greetings}>NEWS NEWS</Text>
          <Text style={styles.name}>3 Minute News</Text>
        </View>
        <Entypo name="dots-three-horizontal" style={styles.icon} size={18} />
      </View>
      <View style={styles.footerContent}>
        <View style={styles.footerLeft}>
          <View style={styles.usersContainer}>
            {images.map((image, index) => (
                <Image source={image} style={[styles.image , {left: (index * 25), zIndex: -index}]} key={index}/>
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.footerData}>
              <Ionicons name="person" size={15} />
              <Text style={styles.footerDataText}>155</Text>
            </View>
            <View style={styles.footerData}>
              <FontAwesome name="comment" size={15} />
              <Text style={styles.footerDataText}>5</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.footerRightData}>
            <Text style={styles.footerRightDataText}>Lena Marsh</Text>
            <FontAwesome name="commenting-o" size={15} />
          </View>
          <View style={styles.footerRightData}>
            <Text style={styles.footerRightDataText}>Lena Marsh</Text>
            <FontAwesome name="commenting-o" size={15} />
          </View>
          <View style={styles.footerRightData}>
            <Text style={styles.footerRightDataText}>Lena Marsh</Text>
            <FontAwesome name="commenting-o" size={15} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 180,
    borderRadius: 25,
    backgroundColor: "#BBDCE5",
    alignSelf: "center",
    padding: 12,
    paddingHorizontal: 18,
  },
  greetings: {
    fontFamily: "Inter_500Medium",
    color: "#727D73",
    fontSize: 12,
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderStyle: "dashed",
  },
  icon: {
    padding: 5,
    borderRadius: 5,
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10
  },
  footerData: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
    padding: 6,
    borderRadius: 8,
  },
  footerLeft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  footerDataText: {
    fontFamily: "Inter_500Medium",
  },
  footerRightData: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
    marginBottom: 6,
  },
  footerRightDataText: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  usersContainer: {
    position: "relative",
    height: 37,
    minWidth: 100,
  },
  image: {
    width: 35,
    height: 35,
    backgroundColor: "#FF8F8F",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    position: "absolute",
    left: 0
  },
});
