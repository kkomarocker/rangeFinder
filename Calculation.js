import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const Calculation = props => {
  return (
    <View>
      <Text style={styles.font}>{props.startCoord}</Text>
      <Text style={styles.font}>{props.endCoord}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    backgroundColor: "#fff"
  }
});

export default Calculation;
