import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Score from "./Score";

class Quiz extends React.Component {
  state = {
    showAnswer: false,
    correct: 0,
    index: 0
  };

  onPressShowAnswer() {
    console.log(this.state);
    this.setState({ showAnswer: !showAnswer });
  }
  onPressCorrect() {
    console.log(this.state);
    this.setState({
      correct: correct + 1,
      index: index + 1,
      showAnswer: true
    });
    console.log(this.state);
    // nextQuestion();
  }
  onPressInCorrect() {
    console.log(this.state);
    console.log("was pressed");
    this.setState({ index: index + 1, showAnswer: true });
    console.log(this.state);
    // nextQuestion();
  }
  // nextQuestion = () => {
  //   this.setState({ showAnswer: false, index: index + 1 });
  // };

  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const questions = deck.questions;

    if (questions.length === 0) {
      return (
        <View behavior="padding" style={styled.container}>
          <Text>There are no cards in the deck!</Text>
        </View>
      );
    }

    if (this.state.index === questions.length - 1) {
      () => this.props.navigation.push("YourScore", { deck });
    }
    return (
      <View behavior="padding" style={styled.container}>
        <Text>
          {this.state.index + 1}/{questions.length}
        </Text>

        {this.state.showAnswer ? (
          <Text>{questions[this.state.index].answer}</Text>
        ) : (
          <Text>{questions[this.state.index].question}</Text>
        )}

        <Button
          style={styled.btn}
          onPress={() => this.onPressShowAnswer()}
          title={this.state.showAnswer ? "Question" : "Answer"}
        />

        <Button
          style={styled.btn}
          title="Correct"
          onPress={() => this.onPressCorrect()}
        />
        <Button
          style={styled.btn}
          title="Incorrect"
          onPress={() => this.onPressInCorrect()}
        />
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
