import React from "react";
import { AsyncStorage } from "react-native";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
  Text,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import Deck from "./Deck";
import { handleGetDecks } from "../actions/decks";
import { getDecks } from "../utils/api";

class Decks extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getDecks().then(decks => dispatch(handleGetDecks(decks)));
  }
  clearAllData() {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert("success"));
  }
  render() {
    const { decks } = this.props;
    console.log("ALL DECKS");
    console.log(decks);
    return (
      <ScrollView contentContainerStyle={styled.container}>
        {Object.keys(decks).map(deck => (
          <Deck key={deck} deck={decks[deck]} />
        ))}

        <Button title="delete" onPress={this.clearAllData}>
          delete
        </Button>
      </ScrollView>
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

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(Decks);
