import React from "react";
import { StyleSheet, Text, View, Button, Animated } from "react-native";
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
    }, 500);
  };
  render() {
    const { deck } = this.props;
    const cards = deck.questions.length > 1 ? " Cards" : " Card";
    return (
      <Animated.View
        style={[
          styled.container,
          { transform: [{ scale: this.state.bounceValue }] }
        ]}
      >
        <Button title={deck.title} onPress={this.pressButton} />
        <Text style={styled.text}>
          {deck.questions.length}
          {cards}
        </Text>
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
  },
  text: {
    textAlign: "center",
    fontSize: 18
  }
});

export default withNavigation(connect()(Deck));
