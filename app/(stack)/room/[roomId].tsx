import { roomData } from "@/constants/card";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RoomScreen = () => {
  const { roomId } = useLocalSearchParams<{ roomId: string }>();
  const room = roomData[roomId];
  console.log(room);
  return (
    <View>
      <Text>RoomScreen: {roomId}</Text>
    </View>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({});
