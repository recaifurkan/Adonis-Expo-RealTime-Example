import React from "react";
const config = require("./config");
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { price: "" };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePriceChange(price) {
    this.setState({ price });
  }
  handleSubmit() {
    this.submit();
  }

  submit() {
    const url = config.url + "/price?price=" + this.state.price;
    console.log(this.state);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((res) => console.log(res));
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Miktar Gir.</Text>
          <ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Miktar"
                maxLength={20}
                onBlur={Keyboard.dismiss}
                value={this.state.price}
                onChangeText={this.handlePriceChange}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={this.handleSubmit}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: "#F5FCFF",
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
