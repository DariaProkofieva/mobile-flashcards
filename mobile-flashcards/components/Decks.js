import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import Deck from "./Deck";
import { handleGetDecks } from "../actions/decks";
import { getDecks } from "../utils/api";

class Decks extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getDecks().then(decks => dispatch(handleGetDecks(decks)));
  }
  render() {
    const { decks } = this.props;
    console.log(decks);
    return (
      <View style={styled.container}>
        {Object.keys(decks).map(deck => (
          <Deck key={deck} deck={decks[deck]} />
        ))}
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

function mapStateToProps(decks) {
  return {
    decks
  };
}
export default connect(mapStateToProps)(Decks);
