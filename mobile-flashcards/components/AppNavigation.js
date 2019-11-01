import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import IndividualDeckView from "./IndividualDeckView";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";
import Decks from "./Decks";
import NewDeck from "./NewDeck";
import Score from "./Score";

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
      },
      header: null
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
      },
      header: null
    }
  }
});
const TabsNav = createAppContainer(RootStack);

const AppNavigator = createStackNavigator({
  Tab: {
    screen: TabsNav,
    navigationOptions: { header: null }
  },
  DeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      title: "Deck 1"
    }
  },
  AddQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "Add Card"
    }
  },
  YourQuiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  },
  YourScore: {
    screen: Score,
    navigationOptions: {
      title: "Score"
    }
  }
});
const AppNavigation = createAppContainer(AppNavigator);

export default AppNavigation;
