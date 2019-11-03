import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { withNavigation } from "react-navigation";

class Quiz extends React.Component {
  state = {
    showAnswer: false,
    correct: 0,
    index: 0
  };

  onPressShowAnswer = () => {
    this.setState(state => ({ showAnswer: !this.state.showAnswer }));
  };

  onPressCorrect = () => {
    this.setState({
      correct: this.state.correct + 1,
      index: this.state.index + 1,
      showAnswer: false
    });
  };
  onPressInCorrect = () => {
    this.setState({ index: this.state.index + 1, showAnswer: false });
  };
  reset = () => {
    this.setState({
      correct: 0,
      index: 0,
      showAnswer: false
    });
    const { deck } = this.props.navigation.state.params;
    this.props.navigation.push("Quiz", { deck });
  };
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
    return this.state.index !== questions.length ? (
      <View behavior="padding" style={styled.container}>
        <Text style={styled.text}>
          {this.state.index + 1}/{questions.length}
        </Text>

        {this.state.showAnswer ? (
          <Text style={styled.text}>{questions[this.state.index].answer}</Text>
        ) : (
          <Text style={styled.text}>
            {questions[this.state.index].question}
          </Text>
        )}

        <Button
          style={styled.btn}
          onPress={this.onPressShowAnswer}
          title={this.state.showAnswer ? "Question" : "Answer"}
        />

        <Button
          style={styled.btn}
          title="Correct"
          onPress={this.onPressCorrect}
        />
        <Button
          style={styled.btn}
          title="Incorrect"
          onPress={this.onPressInCorrect}
        />
      </View>
    ) : (
      <View style={styled.container}>
        <Text style={styled.text}>
          You answered {this.state.correct} questions correctly!
        </Text>
        <Button style={styled.btn} title="Restart Quiz" onPress={this.reset} />
        <Button
          style={styled.btn}
          title="Back to Deck"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 5,
    width: 150
  },
  btnText: {
    color: "#fff"
  },
  text: {
    textAlign: "center",
    fontSize: 24
  }
});

export default withNavigation(Quiz);
