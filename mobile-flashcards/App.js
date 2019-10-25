import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";

import AppNavigation from "./components/AppNavigation";

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, marginTop: StatusBar.currentHeight }}
    >
      <AppNavigation />
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
