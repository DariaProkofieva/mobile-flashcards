import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from "react-native";
import { withNavigation } from "react-navigation";

class Deck extends React.Component {
  // static navigationOptions = {
  //   headerTitle: "First screen"
  // };
  render() {
    return (
      <View style={styled.container}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("DeckView")}
        />
        <Text style={styled.btnText}>First deck</Text>
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

export default withNavigation(Deck);
