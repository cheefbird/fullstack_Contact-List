import React from "react";
import { StyleSheet } from "react-native";

import Contacts from "./src/screens/Contacts";

export default class App extends React.Component {
  render() {
    return <Contacts />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
