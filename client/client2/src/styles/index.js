import { StyleSheet } from "react-native";

export default StyleSheet.create({
  campaignCardColumn: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center", // <-- the magic
  },
  campaignCardActive: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#28a745",
  },
  campaignCardPassive: {
    flex: 1,
    flexDirection: "row",
  },
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
