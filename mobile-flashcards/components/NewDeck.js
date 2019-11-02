import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button
} from "react-native";

import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { addDeckFunction } from "../actions/decks";

class NewDeck extends React.Component {
  state = {
    newDeckName: ""
  };
  submitTitle = () => {
    const { dispatch } = this.props;

    dispatch(addDeckFunction(this.state.newDeckName)).then(() => {
      const decks = this.props.decks;
      const newTitle = this.state.newDeckName;
      const deckId = Object.keys(decks).filter(function(key) {
        return decks[key].title === newTitle;
      });
      const deck = decks[deckId];
      this.setState({ newDeckName: "" });
      this.props.navigation.push("DeckView", { deck });
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styled.container}>
        <Text style={styled.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styled.input}
          type="text"
          placeholder="Deck title"
          onChangeText={newDeckName => this.setState({ newDeckName })}
        />
        <Button style={styled.btn} title="SUBMIT" onPress={this.submitTitle} />
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

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default withNavigation(connect(mapStateToProps)(NewDeck));
