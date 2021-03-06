import React from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { addCardFunction } from "../actions/decks";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  };
  submitCard = () => {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;
    const id = deck.id;
    const card = {
      question: this.state.question,
      answer: this.state.answer
    };
    this.props.addCard(id, card);
    navigation.goBack();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styled.container}>
        <TextInput
          style={styled.input}
          type="text"
          placeholder="Your question"
          name="question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styled.input}
          type="text"
          placeholder="Your answer"
          name="answer"
          onChangeText={answer => this.setState({ answer })}
        />

        <Button style={styled.btn} title="SUBMIT" onPress={this.submitCard} />
      </KeyboardAvoidingView>
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
  input: {
    borderRadius: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50
  },
  text: {
    fontSize: 24
  }
});
function mapDispatchToProps(dispatch) {
  return {
    addCard: (id, card) => {
      dispatch(addCardFunction(id, card));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);
