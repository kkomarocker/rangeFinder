import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Location, Permissions } from "expo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      location: null,
      errorMsg: null
    };
  }

  getLocationAsync = async () => {
    let status = Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({ errorMsg: "Location service denied" });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.getLocationAsync()}
          title="Record Starting Point"
        />
        <Button
          onPress={() => this.getLocationAsync()}
          title="Record Destination Point"
        />
        {this.getLocationAsync ? console.log(this.state.location) : null}
      </View>
    );
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

export default App;
