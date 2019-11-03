import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Animated
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class Deck extends React.Component {
  state = {
    bounceValue: new Animated.Value(1)
  };
  pressButton = () => {
    Animated.sequence([
      Animated.timing(this.state.bounceValue, { duration: 200, toValue: 1.04 }),
      Animated.spring(this.state.bounceValue, { toValue: 1, friction: 4 })
    ]).start();
    setTimeout(() => {
      this.props.navigation.navigate("DeckView", { deck: this.props.deck });
    }, 1000);
  };
  render() {
    const { deck } = this.props;
    return (
      <Animated.View
        style={[
          styled.container,
          { transform: [{ scale: this.state.bounceValue }] }
        ]}
      >
        <Button title={deck.title} onPress={this.pressButton} />
        <Text>{deck.questions.length} Cards</Text>
      </Animated.View>
    );
  }
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 20
  }
});

export default withNavigation(connect()(Deck));
