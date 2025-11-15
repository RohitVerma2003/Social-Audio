import Header from "@/components/Header";
import { imageSources } from "@/constants/card";
import { RootState } from "@/redux/store";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const RoomScreen = () => {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const room = useSelector((state: RootState) => state.rooms.roomsData[roomId]);
  const images = room.userImages.map((img) => imageSources[img]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greetings}>{room.heading}</Text>
              <Text style={styles.name}>{room.title}</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              style={styles.icon}
              size={18}
            />
          </View>
          <View style={styles.callContainer}>
            {images.map((image, index) => (
              <View key={index}>
                <Image source={image} style={[styles.image]} />
                <Ionicons name="mic-sharp" style={styles.mic} size={20} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 10,
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
    paddingBottom: 10,
  },
  icon: {
    padding: 5,
    borderRadius: 5,
  },
  callContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 25,
    rowGap: 15,
    justifyContent: "center",
    marginTop: 15,
  },
  image: {
    width: Platform.OS === "android" ? "25%" : "100%",
    height: 100,
    aspectRatio: 1,
    maxWidth: 90,
    backgroundColor: "#FF8F8F",
    borderRadius: 30,
  },
  mic: {
    position: "absolute",
    backgroundColor: "white",
    padding: 3,
    borderRadius: 20,
    bottom: 0,
    right: 0,
    elevation: 5,
  },
});
