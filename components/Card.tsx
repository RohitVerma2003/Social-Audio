import { imageSources, Room } from "@/constants/card";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = ({ room }: { room: Room }) => {
  const imageBaseUrl = "../assets/icons/";
  const images = room.userImages.map((img) => imageSources[img]);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.greetings}>{room.heading}</Text>
          <Text style={styles.name}>{room.title}</Text>
        </View>
        <Entypo name="dots-three-horizontal" style={styles.icon} size={18} />
      </View>
      <View style={styles.footerContent}>
        <View style={styles.footerLeft}>
          <View style={styles.usersContainer}>
            {images.map((image, index) => (
              <Image
                source={image}
                style={[styles.image, { left: index * 25, zIndex: -index }]}
                key={index}
              />
            ))}
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={styles.footerData}>
              <Ionicons name="person" size={15} />
              <Text style={styles.footerDataText}>{room.usersCount}</Text>
            </View>
            <View style={styles.footerData}>
              <FontAwesome name="comment" size={15} />
              <Text style={styles.footerDataText}>{room.commentCount}</Text>
            </View>
          </View>
        </View>
        <View>
          {room.commentingUsers.map((user, index) => (
            <View style={styles.footerRightData} key={index}>
              <Text style={styles.footerRightDataText}>{user}</Text>
              <FontAwesome name="commenting-o" size={15} />
            </View>
          ))}
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
    marginBottom: 10
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
    marginTop: 10,
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
    justifyContent: "flex-start",
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
    left: 0,
  },
});
