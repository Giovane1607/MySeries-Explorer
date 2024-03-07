import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SeriesPages = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a página de Séries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    text: {
        textAlign: "center"
    }
})

export default SeriesPages;