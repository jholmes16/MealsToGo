import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.phoneView}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  phoneView: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
