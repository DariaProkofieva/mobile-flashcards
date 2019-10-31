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
    this.props.addDeck(this.state.newDeckName);
    this.setState({ newDeckName: "" });
    this.props.navigation.navigate("Decks");
  };
  render() {
    return (
      <KeyboardAvoidingView style={styled.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{
            height: 40,
            width: 150,
            borderColor: "gray",
            borderWidth: 1
          }}
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
    borderRadius: 5,
    width: 150
  },
  btnText: {
    color: "#fff"
  }
});
function mapDispatchToProps(dispatch) {
  return {
    addDeck: title => {
      dispatch(addDeckFunction(title));
    }
  };
}

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(NewDeck)
);
