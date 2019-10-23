import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styled.container}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          type="text"
          placeholder="Your question"
          name="question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          type="text"
          placeholder="Your answer"
          name="answer"
          onChangeText={answer => this.setState({ answer })}
        />

        <Button
          style={styled.btn}
          title="SUBMIT"
          onPress={() =>
            console.log(`${this.state.question} |||| ${this.state.answer} `)
          }
        />
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
    borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});

export default NewQuestion;
