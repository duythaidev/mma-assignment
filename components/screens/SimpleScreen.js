import {  Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.simpleScreen}>
      <Text style={styles.simpleScreenText}>Home</Text>
    </SafeAreaView>
  );
}

export function GoldScreen() {
  return (
    <SafeAreaView style={styles.simpleScreen}>
      <Text style={styles.simpleScreenText}>Gold</Text>
    </SafeAreaView>
  );
}

export function GameScreen() {
  return (
    <SafeAreaView style={styles.simpleScreen}>
      <Text style={styles.simpleScreenText}>Game</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  simpleScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  simpleScreenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
  },
});