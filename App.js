import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ToastAndroid
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "0",
      num2: "0"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType="numeric"
          placeholder="any number"
          style={styles.input}
          onChangeText={num1 => this.setState({ num1 })}
          value={this.state.num1}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          placeholder="any number"
          style={styles.input}
          onChangeText={num2 => this.setState({ num2 })}
          value={this.state.num2}
        ></TextInput>
        <Button
          title="calculate"
          onPress={() => {
            let x = String(Number(this.state.num1) + Number(this.state.num2));
            ToastAndroid.show(x, ToastAndroid.SHORT);
          }}
        ></Button>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    width: 200
  }
});
