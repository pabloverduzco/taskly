import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";

function ListItem() {
  return (
    <View style={styles.container}>
      <Text >Get thinags donde</Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ListItem />
      <ListItem />
      <ListItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  }
});