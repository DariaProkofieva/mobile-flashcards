import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import AppNavigation from "./components/AppNavigation";

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <ScrollView
        contentContainerStyle={{ flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <AppNavigation />
      </ScrollView>
    </Provider>
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
