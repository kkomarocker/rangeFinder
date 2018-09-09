import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Location, Permissions } from "expo";

import Calculation from "./Calculation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startLocation: null,
      endLocation: null,
      errorMsg: null
    };
  }

  getStartLocationAsync = async () => {
    let status = Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({ errorMsg: "Location service denied" });
    }

    let startLocation = await Location.getCurrentPositionAsync({});
    this.setState({ startLocation });
  };

  getEndLocationAsync = async () => {
    let status = Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({ errorMsg: "Location service denied" });
    }

    let endLocation = await Location.getCurrentPositionAsync({});
    this.setState({ endLocation });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.getStartLocationAsync()}
          title="Record Starting Point"
        />
        <Button
          onPress={() => this.getEndLocationAsync()}
          title="Record Destination Point"
        />
        <Calculation
          startCoord={this.state.startLocation}
          endCoord={this.state.endLocation}
        />
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
