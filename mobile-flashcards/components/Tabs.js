import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Decks from "./Decks";
import NewDeck from "./NewDeck";

const RootStack = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: "Decks",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: "Add Deck",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
});

const Tabs = createAppContainer(RootStack);

export default Tabs;
