import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "white" }}>
        My name is <Text style={{ fontWeight: "bold" }}>Joshua</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22577A",
    alignItems: "center",
    justifyContent: "center",
  },
});
