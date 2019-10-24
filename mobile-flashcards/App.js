import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Tabs from "./components/Tabs";
import AppNavigation from "./components/AppNavigation";

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, marginTop: StatusBar.currentHeight }}
    >
      <Tabs />
      {/* <AppNavigation /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
