import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button
} from "react-native";

import { withNavigation } from "react-navigation";
import { handleCreateDeck } from "../actions/decks";
import { createDeck } from "../utils/api";

class NewDeck extends React.Component {
  state = {
    newDeckName: ""
  };
  // submitTitle = () => {
  //   const newDeck = createDeck(this.state.newDeckName);
  //   this.props.dispatch(handleCreateDeck(newDeck)),
  //     this.setState({ newDeckName: "" }),
  //     this.props.navigation.navigate("Decks");
  // };
  submitTitle = () => {
    const { dispatch } = this.props;
    createDeck(this.state.newDeckName).then(title =>
      dispatch(handleCreateDeck(title))
    );
    this.setState({ newDeckName: "" }), this.props.navigation.navigate("Decks");
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
          //   value={this.state.newDeckName}
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

export default withNavigation(NewDeck);
