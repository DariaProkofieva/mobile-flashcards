import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndividualDeckView from "./IndividualDeckView";
import NewQuestion from "./NewQuestion";
import Quiz from "./Quiz";

const AppNavigator = createStackNavigator({
  DeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      title: "IndividualDeckView"
    }
  },
  AddQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: "Add card"
    }
  },
  YourQuiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  }
});

export default createAppContainer(AppNavigator);
