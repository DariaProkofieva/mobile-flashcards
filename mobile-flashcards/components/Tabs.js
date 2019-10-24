import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import Deck from "./Deck";
import NewDeck from "./NewDeck";

const RootStack = createMaterialTopTabNavigator({
  Deck: {
    screen: Deck,
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

// Now AppContainer is the main component for React to render
export default Tabs;
