import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { withNavigation } from "react-navigation";

class Score extends React.Component {
  render() {
    return (
      <View>
        <Text>number of questions answered correctly</Text>
        <Button
          style={styled.btn}
          title="Restart Quiz"
          onPress={() => this.props.navigation.push("Quiz", { deck })}
        />
        <Button
          style={styled.btn}
          title="Back to Deck"
          onPress={() =>
            this.props.navigation.push("IndividualDeckView", { deck })
          }
        />
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
    borderRadius: 5,
    width: 150
  },
  btnText: {
    color: "#fff"
  }
});
export default withNavigation(Score);
