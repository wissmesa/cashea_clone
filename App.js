import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants'
import { Main } from "./Components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
    // paddingTop: Constants.statusBarHeight,
    // paddingBottom: Constants.statusBarHeight
  },
});
