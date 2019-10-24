import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";

import NewQuestion from "./components/NewQuestion";
import NewDeck from "./components/NewDeck";
import Tabs from "./components/Tabs";
export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, marginTop: StatusBar.currentHeight }}
    >
      <Tabs />
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
