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
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "stretch"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(Decks);
