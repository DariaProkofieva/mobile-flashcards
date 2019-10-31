import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Score from "./Score";

class Quiz extends React.Component {
  state = {
    showAnswer: false,
    correct: 0
  };
  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    onPressCorrect = () => {
      this.setState({ showAnswer: true });
    };
    onPressShowAnswer = () => {
      this.setState({ correct: correct + 1 });
    };
    return (
      // The view displays the number of questions remaining.
      <View behavior="padding" style={styled.container}>
        <Text> number of questions remaining</Text>
        <Text>{/* Will map Questions here */}</Text>
        {showAnswer && (
          <View>
            {
              //answer}
            }
          </View>
        )}
        <Button
          style={styled.btn}
          title="Correct"
          onPress={this.onPressCorrect}
        />
        <Button
          style={styled.btn}
          title="Incorrect"
          onPress={this.onPressShowAnswer}
        />
        <Button
          style={styled.btn}
          title="Show Answer"
          onPress={this.onPressShowAnswer}
        />
        {/* When the last question is answered, a score is displayed.
         This can be displayed as a percentage of correct answers 
         or just the number of questions answered correctly. 

         When the score is displayed, buttons are displayed 
         to either start the quiz over or go back to the Individual Deck view.
          'Restart Quiz' and 'Back to Deck' buttons */}
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});

export default withNavigation(Quiz);
