import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

class Quiz extends React.Component {
  render() {
    return (
      <View behavior="padding" style={styled.container}>
        <Text> number of questions remaining</Text>
        <Text>{/* Will map Questions here */}</Text>
        <Button
          style={styled.btn}
          title="Correct"
          onPress={
            () => console.log(`correct`)
            // on press will show Answer
          }
        />
        <Button
          style={styled.btn}
          title="Incorrect"
          onPress={
            () => console.log(`incorrect`)
            // on press will show Answer
          }
        />
        <Button
          style={styled.btn}
          title="Show Answer"
          onPress={
            () => console.log(`incorrect`)
            // on press will show Answer
          }
        />
        {/* When the last question is answered, a score is displayed.
         This can be displayed as a percentage of correct answers 
         or just the number of questions answered correctly. 

         When the score is displayed, buttons are displayed 
         to either start the quiz over or go back to the Individual Deck view.
          'Restart Quiz' and 'Back to Deck' buttons */}
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

export default Quiz;
