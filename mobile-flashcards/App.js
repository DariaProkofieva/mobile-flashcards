import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import AppNavigation from "./components/AppNavigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            marginTop: StatusBar.currentHeight
          }}
        >
          <AppNavigation />
        </ScrollView>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
