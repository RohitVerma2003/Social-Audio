import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { buildHref } = useLinkBuilder();

  const icons: Record<string, any> = {
    index: "home-outline",
    schedule: "calendar-clear-outline",
    notification: "notifications-outline",
    addRoom: "add",
  };

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) navigation.navigate(route.name);
        };

        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name)}
            onPress={onPress}
            style={styles.tabItem}
          >
            <View
              style={[
                styles.iconWrapper,
                isFocused && !(route.name === "addRoom") && styles.focusIcon,
                route.name === "addRoom" && styles.addRoomButton,
              ]}
            >
              <Ionicons
                name={icons[route.name]}
                size={22}
                color={route.name === "addRoom" ? "white" : isFocused ? "#8BAE66" : "#555"}
              />
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="schedule" />
      <Tabs.Screen name="notification" />
      <Tabs.Screen name="addRoom" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center"
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
  },
  iconWrapper: {
    padding: 6,
    borderRadius: 15,
  },
  focusIcon: {
    borderWidth: 2,
    borderColor: "#8BAE66",
    borderRadius: 15,
  },
  addRoomButton: {
    backgroundColor: "#8BAE66",
    padding: 8,
    borderRadius: 15,
  },
});
